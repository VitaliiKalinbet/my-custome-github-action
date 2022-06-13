import { getInput, setFailed, setOutput } from '@actions/core'
import { exec as _exec } from '@actions/exec'
import { getOctokit, context } from '@actions/github'
import { getCommitsDiff } from './utils/getCommits'

async function run() {
  try {
    var fromTag = getInput('fromTag')
    var toTag = getInput('toTag')
    const myToken = getInput('myToken')
    const octokit = new getOctokit(myToken)
    const { owner, repo } = context.repo
    const regexp = /^[.A-Za-z0-9_-]*$/

    if (!fromTag) {
      const latestRelease = await octokit.rest.repos.getLatestRelease({
        owner: owner,
        repo: repo
      })
      if (latestRelease) {
        fromTag = latestRelease.data.tag_name
      } else {
        setFailed(
          `There are no releases on ${owner}/${repo}. Tags are not releases.`
        )
      }
    }

    if (!toTag) {
      const listReleases = await octokit.rest.repos.listReleases({
        owner,
        repo,
      });
      toTag = listReleases?.data[0]?.tag_name || context.sha
    }

    console.log(`fromTag: ${fromTag}`)
    console.log(`toTag: ${toTag}`)

    if (
      !!fromTag &&
      !!toTag &&
      regexp.test(fromTag) &&
      regexp.test(toTag)
    ) {
      getChangelog(octokit, fromTag, toTag, owner, repo)
    } else {
      setFailed(
        'Branch names must contain only numbers, strings, underscores, periods, and dashes.'
      )
    }
  } catch (error) {
    setFailed(error.message)
  }
}

async function getChangelog(octokit, fromTag, toTag, owner, repo) {
  try {
    let commits = []
    try {
      commits = getCommitsDiff(octokit, owner, repo, fromTag, toTag)
      console.log('commits :>> ', commits);
    } catch (error) {
      setFailed(
        `💥 Failed to retrieve - Invalid tag? - Because of: ${error}`
      )
    }

    const output = commits.reduce((acc, commit) => acc += commit + '/n', '');

    if (commits) {
      console.log(
        '\x1b[32m%s\x1b[0m',
        `Changelog between ${fromTag} and ${toTag}:\n${output}`
      )
      setOutput('changelog', output)
    } else {
      setFailed(err)
      process.exit(1)
    }
  } catch (err) {
    setFailed(
      `Could not generate changelog between ${fromTag} and ${toTag} references because: ${err.message}`
    )
    process.exit(0)
  }
}

try {
  run()
} catch (error) {
  setFailed(error.message)
}
