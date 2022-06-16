export function getChangelog(commits, owner, repo, fromTag, toTag) {
  let newChangelog = `# Version ${createChangelogTagLink(
    toTag,
    owner,
    repo,
  )} (${new Date().toISOString().split('T')[0]})\n`;

  newChangelog += `### Commits list create from version ${createChangelogTagLink(
    fromTag,
    owner,
    repo,
  )} to version ${createChangelogTagLink(toTag, owner, repo)}\n\n`;

  const changelogSkeleton = {
    fix: { title: 'Bug fixes', arr: [] },
    feat: { title: 'Features', arr: [] },
    docs: { title: 'Documentation', arr: [] },
    style: { title: 'Code style', arr: [] },
    refactor: { title: 'Refactor', arr: [] },
    perf: { title: 'Perfomance improvements', arr: [] },
    test: { title: 'Test', arr: [] },
    chore: { title: 'Chore', arr: [] },
  };

  const regExp = /(feat|fix|docs|style|refactor|perf|test|chore)\(?([\w-]+)?\)?:\s*(.*)/;

  function createChangelogLine(targetArray, scope, message, sha) {
    if (!targetArray) return;
    let linkToTask = '* ';
    const taskNumberRegExp = /\w+-\d+/;
    if (taskNumberRegExp.test(scope)) {
      linkToTask = `* [${scope.toUpperCase()}](https://pdffiller.atlassian.net/browse/${scope.toUpperCase()}): `;
    }
    changelogSkeleton[targetArray].arr.push(
      `${linkToTask} ${message} ([${sha.substring(
        0,
        6,
      )}](https://github.com/${owner}/${repo}/commit/${sha}))\n`,
    );
  }

  function supplementChangelog(array, title) {
    if (array.length === 0) return;

    newChangelog += `## ${title}\n`;
    array.forEach((item) => {
      newChangelog += item;
    });
    newChangelog += '\n';
  }

  commits.forEach((commit) => {
    const matchResult = commit.message.match(regExp);
    if (matchResult) {
      const [, type, scope, message] = matchResult;
      createChangelogLine(type, scope, message, commit.sha);
    }
  });

  Object.values(changelogSkeleton).forEach(
    (commitsGroup) => supplementChangelog(commitsGroup.arr, commitsGroup.title),
  );

  return newChangelog;
}

function createChangelogTagLink(tag, owner, repo) {
  return `[${tag}](https://github.com/${owner}/${repo}/releases/tag/${tag})`;
}
