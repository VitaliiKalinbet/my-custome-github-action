export function getChangelog(commits, fromTag, toTag) {
  let newChangelog = `# Version ${toTag} (${
    new Date().toISOString().split("T")[0]
  })\n`;

  newChangelog += `Commits list create from latest release version ${fromTag}, to version ${toTag}\n\n`;

  const features = [];
  const chores = [];
  const other = [];

  commits.forEach((commit) => {
    if (commit.message.startsWith("feat")) {
      features.push(
        `* ${commit.message} ([${commit.sha.substring(
          0,
          6
        )}](https://github.com/jackyef/changelog-generator/commit/${
          commit.sha
        }))\n`
      );
    } else if (commit.message.startsWith("chore")) {
      chores.push(
        `* ${commit.message} ([${commit.sha.substring(
          0,
          6
        )}](https://github.com/jackyef/changelog-generator/commit/${
          commit.sha
        }))\n`
      );
    } else {
        other.push(`* ${commit.message} ([${commit.sha.substring(
            0,
            6
          )}](https://github.com/jackyef/changelog-generator/commit/${
            commit.sha
          }))\n`);
    }
  });

  if (features.length) {
    newChangelog += `## Features\n`;
    features.forEach((feature) => {
      newChangelog += feature;
    });
    newChangelog += "\n";
  }

  if (chores.length) {
    newChangelog += `## Chores\n`;
    chores.forEach((chore) => {
      newChangelog += chore;
    });
    newChangelog += "\n";
  }

  if (other.length) {
    newChangelog += `## Other changes\n`;
    chores.forEach((other) => {
      newChangelog += other;
    });
    newChangelog += "\n";
  }

  return newChangelog;
}
