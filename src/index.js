import { getInput, setFailed, setOutput } from '@actions/core';
import { exec as _exec } from '@actions/exec';
import { getOctokit, context } from '@actions/github';
import { getCommitsDiff } from './utils/getCommits';
import { getChangelog } from './utils/getChangelog';

async function generateReleaseNotes() {
  try {
    let fromTag = getInput('fromTag');
    let toTag = getInput('toTag');
    const myToken = getInput('myToken');
    // eslint-disable-next-line new-cap
    const octokit = new getOctokit(myToken);
    const { owner, repo } = context.repo;
    const regexp = /^[.A-Za-z0-9_-]*$/;

    if (!fromTag) {
      const latestRelease = await octokit.rest.repos.getLatestRelease({
        owner,
        repo,
      });

      if (latestRelease) {
        fromTag = latestRelease.data.tag_name;
      } else {
        setFailed(`There are no releases on ${owner}/${repo}. Tags are not releases.`);
      }
    }

    if (!toTag) {
      const listReleases = await octokit.rest.repos.listReleases({
        owner,
        repo,
      });
      toTag = listReleases?.data[0]?.tag_name || context.sha;
    }

    console.log(`Previous tag: ${fromTag}`);
    console.log(`Current tag: ${toTag}`);

    if (
      fromTag
      && toTag
      && regexp.test(fromTag)
      && regexp.test(toTag)
    ) {
      createChangelog(octokit, fromTag, toTag, owner, repo);
    } else {
      setFailed('Branch names must contain only numbers, strings, underscores, periods, and dashes.');
    }
  } catch (error) {
    setFailed(error.message);
  }
}

async function createChangelog(octokit, fromTag, toTag, owner, repo) {
  try {
    const commits = await getCommitsDiff(octokit, owner, repo, fromTag, toTag);
    const changelog = getChangelog(commits, owner, repo, fromTag, toTag);
    console.log(
      '\x1b[32m%s\x1b[0m',
      `Changelog between ${fromTag} and ${toTag}:\n${changelog}`,
    );
    setOutput('changelog', changelog);
  } catch (err) {
    setFailed(`Could not generate changelog between ${fromTag} and ${toTag}. Possible reason: invalid tag. Detailed error: ${err}`);
    process.exit(0);
  }
}

generateReleaseNotes();
