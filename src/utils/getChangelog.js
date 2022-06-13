export function getChangelog(commits, owner, repo, fromTag, toTag) {
  let newChangelog = `# Version ${createChangelogTagLink(
    toTag,
    owner,
    repo
  )} (${new Date().toISOString().split("T")[0]})\n`;

  newChangelog += `### Commits list create from version ${createChangelogTagLink(
    fromTag,
    owner,
    repo
  )} to version ${createChangelogTagLink(toTag, owner, repo)}\n\n`;

  const features = [];
  const fixes = [];
  const docs = [];
  const styles = [];
  const refactors = [];
  const performances = [];
  const tests = [];
  const chores = [];
  const others = [];

  commits.forEach((commit) => {
    if (commit.message.startsWith("feat")) {
      createChangelogLine(features, commit, owner, repo);
    } else if (commit.message.startsWith("fix")) {
      createChangelogLine(fixes, commit, owner, repo);
    } else if (commit.message.startsWith("docs")) {
      createChangelogLine(docs, commit, owner, repo);
    } else if (commit.message.startsWith("style")) {
      createChangelogLine(styles, commit, owner, repo);
    } else if (commit.message.startsWith("refactor")) {
      createChangelogLine(refactors, commit, owner, repo);
    } else if (commit.message.startsWith("perf")) {
      createChangelogLine(performances, commit, owner, repo);
    } else if (commit.message.startsWith("test")) {
      createChangelogLine(tests, commit, owner, repo);
    } else if (commit.message.startsWith("chore")) {
      createChangelogLine(chores, commit, owner, repo);
    } else if (commit.message.includes('[skip bot]')) {
      return;
    } else {
      createChangelogLine(others, commit, owner, repo);
    }
  });

  if (features.length) {
    newChangelog += `## Feature${features.length === 1 ? "" : "s"}\n`;
    features.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (fixes.length) {
    newChangelog += `## Bug fix${fixes.length === 1 ? "" : "es"}\n`;
    fixes.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (docs.length) {
    newChangelog += `## Documentation change${docs.length === 1 ? "" : "s"}\n`;
    docs.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (styles.length) {
    newChangelog += `## Code style change${styles.length === 1 ? "" : "s"}\n`;
    styles.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (refactors.length) {
    newChangelog += `## Refactor change${refactors.length === 1 ? "" : "s"}\n`;
    refactors.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (performances.length) {
    newChangelog += `## Perfomance change${
      performances.length === 1 ? "" : "s"
    }\n`;
    performances.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (tests.length) {
    newChangelog += `## Test change${tests.length === 1 ? "" : "s"}\n`;
    tests.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (chores.length) {
    newChangelog += `## Chore\n`;
    chores.forEach((chore) => {
      newChangelog += chore;
    });
    newChangelog += "\n";
  }

  if (others.length) {
    newChangelog += `## Other change${others.length === 1 ? "" : "s"}\n`;
    others.forEach((other) => {
      newChangelog += other;
    });
    newChangelog += "\n";
  }

  return newChangelog;
}

function createChangelogLine(targetArray, commit, owner, repo) {
  targetArray.push(
    `* ${commit.message} ([${commit.sha.substring(
      0,
      6
    )}](https://github.com/${owner}/${repo}/commit/${commit.sha}))\n`
  );

  return;
}

function createChangelogTagLink(tag, owner, repo) {
  return `[${tag}](https://github.com/${owner}/${repo}/releases/tag/${tag})`;
}
