import * as core from "@actions/core";
import moment from "moment";

export async function getCommitsDiff(octokit, owner, repo, base, head) {
  const commits = await getDiffRemote(octokit, owner, repo, base, head);
  return sortCommits(commits);
}

async function getDiffRemote(octokit, owner, repo, base, head) {
  // Fetch comparisons recursively until we don't find any commits
  // This is because the GitHub API limits the number of commits returned in a single response.
  let commits = [];
  let compareHead = head;
  while (true) {
    const compareResult = await octokit.rest.repos.compareCommits({
      owner,
      repo,
      base,
      head: compareHead,
    });
    if (compareResult.data.total_commits === 0) {
      break;
    }
    commits = compareResult.data.commits.concat(commits);
    compareHead = `${commits[0].sha}^`;
  }

  core.info(
    `ℹ️ Found ${commits.length} commits from the GitHub API for ${owner}/${repo}`
  );
  
  return commits
    .filter((commit) => commit.sha)
    .map(async (commit) => {
      const commit_sha = commit.sha || ""
      const listPullRequestsAssociatedWithCommit = await octokit.rest.repos.listPullRequestsAssociatedWithCommit({
        owner,
        repo,
        commit_sha,
      });

      return ({
        sha: commit.sha || "",
        summary: commit.commit.message.split("\n")[0],
        message: commit.commit.message,
        date: moment(commit.commit.committer?.date),
        author: commit.commit.author?.name || "",
        prNumber: undefined,
        listPullRequestsAssociatedWithCommit,
      })
    });
}

function sortCommits(commits) {
  const commitsResult = [];
  const shas = {};

  for (const commit of commits) {
    if (shas[commit.sha]) {
      continue;
    }
    shas[commit.sha] = true;
    commitsResult.push(commit);
  }

  commitsResult.sort((a, b) => {
    if (a.date.isBefore(b.date)) {
      return -1;
    } else if (b.date.isBefore(a.date)) {
      return 1;
    }
    return 0;
  });

  return commitsResult;
}
