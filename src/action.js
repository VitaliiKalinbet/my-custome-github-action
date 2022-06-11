import { getInput, setFailed, setOutput } from '@actions/core'
import { exec as _exec } from '@actions/exec'
import { getOctokit, context } from '@actions/github'

// const src = __dirname

async function run() {
  try {
    var headRef = getInput('head-ref')
    var baseRef = getInput('base-ref')
    const myToken = getInput('myToken')
    const preRelease = getInput('preRelease')
    const octokit = new getOctokit(myToken)
    const { owner, repo } = context.repo
    const regexp = /^[.A-Za-z0-9_-]*$/
    const github = getOctokit(myToken)

    if (!headRef) {
      const listReleases = await octokit.rest.repos.listReleases({
        owner,
        repo,
      });

      headRef = listReleases?.data[1]?.tag_name || context.sha

      if (preRelease && !baseRef) {
        baseRef = listReleases?.data[0]?.tag_name || ''
      }
    }

    if (!baseRef) {
      const latestRelease = await octokit.rest.repos.getLatestRelease({
        owner: owner,
        repo: repo
      })
      if (latestRelease) {
        baseRef = latestRelease.data.tag_name
      } else {
        setFailed(
          `There are no releases on ${owner}/${repo}. Tags are not releases.`
        )
      }
    }

    console.log(`head-ref: ${headRef}`)
    console.log(`base-ref: ${baseRef}`)

    if (
      !!headRef &&
      !!baseRef &&
      regexp.test(headRef) &&
      regexp.test(baseRef)
    ) {
      getChangelog(github, headRef, baseRef, owner, repo)
    } else {
      setFailed(
        'Branch names must contain only numbers, strings, underscores, periods, and dashes.'
      )
    }
  } catch (error) {
    setFailed(error.message)
  }
}

async function getChangelog(github, headRef, baseRef, owner, repo) {
  try {
    let output = ''
    let err = ''

    // // These are option configurations for the @actions/exec lib`
    // const options = {}
    // options.listeners = {
    //   stdout: data => {
    //     output += data.toString()
    //   },
    //   stderr: data => {
    //     err += data.toString()
    //   }
    // }
    // options.cwd = './'

    // console.log('getChangelog ${src}/changelog.sh :>> ', `${src}/changelog.sh`);

    // await _exec(
    //   'https://github.com/metcalfc/changelog-generator/blob/main/dist/changelog.sh',
    //   [headRef, baseRef, repoName, reverse],
    //   options
    // )

    github.request('GET /repos/:owner/:repo/compare/:baseRef...:headRef', {
      owner,
      repo,
      baseRef,
      headRef,
    }).then(res => {
      console.log('GET /repos/:owner/:repo/compare/:baseRef...:headRef: res >>  ', res)
      console.log('GET /repos/:owner/:repo/compare/:baseRef...:headRef: res.data >> ', res.data)
    })

    if (output) {
      console.log(
        '\x1b[32m%s\x1b[0m',
        `Changelog between ${baseRef} and ${headRef}:\n${output}`
      )
      setOutput('changelog', output)
    } else {
      setFailed(err)
      process.exit(1)
    }
  } catch (err) {
    setFailed(
      `Could not generate changelog between references because: ${err.message}`
    )
    process.exit(0)
  }
}

try {
  run()
} catch (error) {
  setFailed(error.message)
}
