# my-custome-github-action

fsdfsdf

## octokit.rest.repos.listReleases
```js
    const listReleases = await octokit.rest.repos.listReleases({
        context.repo.owner,
        context.repo.repo,
      }) 
      
  listReleases = {
  status: 200,
  url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases',
  headers: {
    'access-control-allow-origin': '*',
    'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'cache-control': 'private, max-age=60, s-maxage=60',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Fri, 10 Jun 2022 16:01:38 GMT',
    etag: 'W/"eb97d81109bf87e492b5501be8ca2a0e19124ea72074d3ce84d495dce39bda20"',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'transfer-encoding': 'chunked',
    vary: 'Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': '07C2:3F07:DFCC36:26E2ECB:62A36AE2',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '998',
    'x-ratelimit-reset': '1654880498',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '2',
    'x-xss-protection': '0'
  },
  data: [
    {
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69171304',
      assets_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69171304/assets',
      upload_url: 'https://uploads.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69171304/assets{?name,label}',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/releases/tag/1.1.2',
      id: 69171304,
      author: [Object],
      node_id: 'RE_kwDOHey-3s4EH3ho',
      tag_name: '1.1.2',
      target_commitish: 'VitaliiKalinbet-patch-1',
      name: 'Release 1.1.2',
      draft: false,
      prerelease: true,
      created_at: '2022-06-10T15:53:46Z',
      published_at: '2022-06-10T15:54:31Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/tarball/1.1.2',
      zipball_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/zipball/1.1.2',
      body: "## What's Changed\r\n" +
        '* Update README.md by @VitaliiKalinbet in https://github.com/VitaliiKalinbet/my-custome-github-action/pull/5\r\n' +
        '\r\n' +
        '\r\n' +
        '**Full Changelog**: https://github.com/VitaliiKalinbet/my-custome-github-action/compare/1.1.1...1.1.2',
      mentions_count: 1
    },
    {
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69164737',
      assets_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69164737/assets',
      upload_url: 'https://uploads.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69164737/assets{?name,label}',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/releases/tag/1.1.1',
      id: 69164737,
      author: [Object],
      node_id: 'RE_kwDOHey-3s4EH17B',
      tag_name: '1.1.1',
      target_commitish: 'main',
      name: 'Release main',
      draft: false,
      prerelease: false,
      created_at: '2022-06-10T14:56:04Z',
      published_at: '2022-06-10T14:57:22Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/tarball/1.1.1',
      zipball_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/zipball/1.1.1',
      body: ''
    },
    {
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69164596',
      assets_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69164596/assets',
      upload_url: 'https://uploads.github.com/repos/VitaliiKalinbet/my-custome-github-action/releases/69164596/assets{?name,label}',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/releases/tag/1.1.0',
      id: 69164596,
      author: [Object],
      node_id: 'RE_kwDOHey-3s4EH140',
      tag_name: '1.1.0',
      target_commitish: 'VitaliiKalinbet-patch-1',
      name: 'Release 1.1.0',
      draft: false,
      prerelease: true,
      created_at: '2022-06-10T14:33:01Z',
      published_at: '2022-06-10T14:55:47Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/tarball/1.1.0',
      zipball_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/zipball/1.1.0',
      body: "## What's Changed\r\n" +
        '* Update README.md by @VitaliiKalinbet in https://github.com/VitaliiKalinbet/my-custome-github-action/pull/1\r\n' +
        '\r\n' +
        '## New Contributors\r\n' +
        '* @VitaliiKalinbet made their first contribution in https://github.com/VitaliiKalinbet/my-custome-github-action/pull/1\r\n' +
        '\r\n' +
        '**Full Changelog**: https://github.com/VitaliiKalinbet/my-custome-github-action/commits/1.1.0',
      mentions_count: 1
    }
  ]
}
```

## octokit.rest.repos.listCommits

```js
    const listCommits = await octokit.rest.repos.listCommits({
        context.repo.owner,
        context.repo.repo,
      });

listCommits = {
  status: 200,
  url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits',
  headers: {
    'access-control-allow-origin': '*',
    'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'cache-control': 'private, max-age=60, s-maxage=60',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Fri, 10 Jun 2022 16:01:38 GMT',
    etag: 'W/"a0549caadabb3ae145de81dd264ac597cba843d2a66f5cdcc36125f46f4eef61"',
    'last-modified': 'Fri, 10 Jun 2022 16:00:19 GMT',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'transfer-encoding': 'chunked',
    vary: 'Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': '07C1:2044:54AD6F:E05A92:62A36AE1',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '999',
    'x-ratelimit-reset': '1654880498',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '1',
    'x-xss-protection': '0'
  },
  data: [
    {
      sha: '86bf4fc22dcbd0985dc389f7b67989590db1f242',
      node_id: 'C_kwDOHey-3toAKDg2YmY0ZmMyMmRjYmQwOTg1ZGMzODlmN2I2Nzk4OTU5MGRiMWYyNDI',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/86bf4fc22dcbd0985dc389f7b67989590db1f242',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/86bf4fc22dcbd0985dc389f7b67989590db1f242',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/86bf4fc22dcbd0985dc389f7b67989590db1f242/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '6f124f90756c441f3f52d4cdc032cc3b4fc7f0ba',
      node_id: 'C_kwDOHey-3toAKDZmMTI0ZjkwNzU2YzQ0MWYzZjUyZDRjZGMwMzJjYzNiNGZjN2YwYmE',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/6f124f90756c441f3f52d4cdc032cc3b4fc7f0ba',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/6f124f90756c441f3f52d4cdc032cc3b4fc7f0ba',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/6f124f90756c441f3f52d4cdc032cc3b4fc7f0ba/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: 'e8d2ed95ad345c3ba5b54179ae2a9775a460ba9e',
      node_id: 'C_kwDOHey-3toAKGU4ZDJlZDk1YWQzNDVjM2JhNWI1NDE3OWFlMmE5Nzc1YTQ2MGJhOWU',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/e8d2ed95ad345c3ba5b54179ae2a9775a460ba9e',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/e8d2ed95ad345c3ba5b54179ae2a9775a460ba9e',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/e8d2ed95ad345c3ba5b54179ae2a9775a460ba9e/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '790039a309eddadc250750f9354be46ee05891db',
      node_id: 'C_kwDOHey-3toAKDc5MDAzOWEzMDllZGRhZGMyNTA3NTBmOTM1NGJlNDZlZTA1ODkxZGI',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/790039a309eddadc250750f9354be46ee05891db',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/790039a309eddadc250750f9354be46ee05891db',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/790039a309eddadc250750f9354be46ee05891db/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '216aea8f6472a552f4457f1c33b1bc8cd950cf53',
      node_id: 'C_kwDOHey-3toAKDIxNmFlYThmNjQ3MmE1NTJmNDQ1N2YxYzMzYjFiYzhjZDk1MGNmNTM',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/216aea8f6472a552f4457f1c33b1bc8cd950cf53',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/216aea8f6472a552f4457f1c33b1bc8cd950cf53',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/216aea8f6472a552f4457f1c33b1bc8cd950cf53/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: 'c4063c3022b5dab405d1fe0c58a780692ca4fcdb',
      node_id: 'C_kwDOHey-3toAKGM0MDYzYzMwMjJiNWRhYjQwNWQxZmUwYzU4YTc4MDY5MmNhNGZjZGI',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/c4063c3022b5dab405d1fe0c58a780692ca4fcdb',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/c4063c3022b5dab405d1fe0c58a780692ca4fcdb',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/c4063c3022b5dab405d1fe0c58a780692ca4fcdb/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: 'f366b62c203422c92b0cd7e9ec4cccaa7f14f5c4',
      node_id: 'C_kwDOHey-3toAKGYzNjZiNjJjMjAzNDIyYzkyYjBjZDdlOWVjNGNjY2FhN2YxNGY1YzQ',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/f366b62c203422c92b0cd7e9ec4cccaa7f14f5c4',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/f366b62c203422c92b0cd7e9ec4cccaa7f14f5c4',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/f366b62c203422c92b0cd7e9ec4cccaa7f14f5c4/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '7962fdc37efc7160287c16fd268c4e5d7c5356e0',
      node_id: 'C_kwDOHey-3toAKDc5NjJmZGMzN2VmYzcxNjAyODdjMTZmZDI2OGM0ZTVkN2M1MzU2ZTA',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/7962fdc37efc7160287c16fd268c4e5d7c5356e0',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/7962fdc37efc7160287c16fd268c4e5d7c5356e0',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/7962fdc37efc7160287c16fd268c4e5d7c5356e0/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: 'a3251c562bdea23a65f571eb81ff330891138d14',
      node_id: 'C_kwDOHey-3toAKGEzMjUxYzU2MmJkZWEyM2E2NWY1NzFlYjgxZmYzMzA4OTExMzhkMTQ',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/a3251c562bdea23a65f571eb81ff330891138d14',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/a3251c562bdea23a65f571eb81ff330891138d14',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/a3251c562bdea23a65f571eb81ff330891138d14/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: 'c525b9754633c96760e0c94896eb15116805111b',
      node_id: 'C_kwDOHey-3toAKGM1MjViOTc1NDYzM2M5Njc2MGUwYzk0ODk2ZWIxNTExNjgwNTExMWI',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/c525b9754633c96760e0c94896eb15116805111b',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/c525b9754633c96760e0c94896eb15116805111b',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/c525b9754633c96760e0c94896eb15116805111b/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '7759d936d40f65520181a4efe9cce0a5fdcda519',
      node_id: 'C_kwDOHey-3toAKDc3NTlkOTM2ZDQwZjY1NTIwMTgxYTRlZmU5Y2NlMGE1ZmRjZGE1MTk',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/7759d936d40f65520181a4efe9cce0a5fdcda519',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/7759d936d40f65520181a4efe9cce0a5fdcda519',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/7759d936d40f65520181a4efe9cce0a5fdcda519/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '4d015f75ccde59c402036eb96dbba2e49b01b726',
      node_id: 'C_kwDOHey-3toAKDRkMDE1Zjc1Y2NkZTU5YzQwMjAzNmViOTZkYmJhMmU0OWIwMWI3MjY',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/4d015f75ccde59c402036eb96dbba2e49b01b726',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/4d015f75ccde59c402036eb96dbba2e49b01b726',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/4d015f75ccde59c402036eb96dbba2e49b01b726/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '7408ffe984054306f08a69bd5ce9191c0e6300b0',
      node_id: 'C_kwDOHey-3toAKDc0MDhmZmU5ODQwNTQzMDZmMDhhNjliZDVjZTkxOTFjMGU2MzAwYjA',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/7408ffe984054306f08a69bd5ce9191c0e6300b0',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/7408ffe984054306f08a69bd5ce9191c0e6300b0',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/7408ffe984054306f08a69bd5ce9191c0e6300b0/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: 'adadcea86f88ca44ad5fbe4b7f6dba392f4d1c90',
      node_id: 'C_kwDOHey-3toAKGFkYWRjZWE4NmY4OGNhNDRhZDVmYmU0YjdmNmRiYTM5MmY0ZDFjOTA',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/adadcea86f88ca44ad5fbe4b7f6dba392f4d1c90',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/adadcea86f88ca44ad5fbe4b7f6dba392f4d1c90',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/adadcea86f88ca44ad5fbe4b7f6dba392f4d1c90/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '32b2cb38009316bafc7aeec4cfd03bb1ab2966ea',
      node_id: 'C_kwDOHey-3toAKDMyYjJjYjM4MDA5MzE2YmFmYzdhZWVjNGNmZDAzYmIxYWIyOTY2ZWE',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/32b2cb38009316bafc7aeec4cfd03bb1ab2966ea',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/32b2cb38009316bafc7aeec4cfd03bb1ab2966ea',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/32b2cb38009316bafc7aeec4cfd03bb1ab2966ea/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '19f6bc4264625e32123b0963a0cd2d9b03087c57',
      node_id: 'C_kwDOHey-3toAKDE5ZjZiYzQyNjQ2MjVlMzIxMjNiMDk2M2EwY2QyZDliMDMwODdjNTc',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/19f6bc4264625e32123b0963a0cd2d9b03087c57',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/19f6bc4264625e32123b0963a0cd2d9b03087c57',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/19f6bc4264625e32123b0963a0cd2d9b03087c57/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: 'c4b895d64c1f9c4f1f96f79efa303a997456f9cd',
      node_id: 'C_kwDOHey-3toAKGM0Yjg5NWQ2NGMxZjljNGYxZjk2Zjc5ZWZhMzAzYTk5NzQ1NmY5Y2Q',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/c4b895d64c1f9c4f1f96f79efa303a997456f9cd',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/c4b895d64c1f9c4f1f96f79efa303a997456f9cd',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/c4b895d64c1f9c4f1f96f79efa303a997456f9cd/comments',
      author: [Object],
      committer: [Object],
      parents: [Array]
    },
    {
      sha: '657bc6d5fdb48cdbf0dfca5cd3191ece1e4ce6b7',
      node_id: 'C_kwDOHey-3toAKDY1N2JjNmQ1ZmRiNDhjZGJmMGRmY2E1Y2QzMTkxZWNlMWU0Y2U2Yjc',
      commit: [Object],
      url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/657bc6d5fdb48cdbf0dfca5cd3191ece1e4ce6b7',
      html_url: 'https://github.com/VitaliiKalinbet/my-custome-github-action/commit/657bc6d5fdb48cdbf0dfca5cd3191ece1e4ce6b7',
      comments_url: 'https://api.github.com/repos/VitaliiKalinbet/my-custome-github-action/commits/657bc6d5fdb48cdbf0dfca5cd3191ece1e4ce6b7/comments',
      author: [Object],
      committer: [Object],
      parents: []
    }
  ]
}
```
