// ReferenceError: require is not defined in ES module scope, you can use import instead
// const core = require('@actions/core');
import core from '@actions/core';

const jiraDomain = core.getInput('jiraDomain');
const jiraToken = core.getInput('jiraToken');
const projectKey = core.getInput('projectKey');
const versionName = core.getInput('jiraToken');

const getAllVersions = async () => {
  await fetch(`https://${jiraDomain}.atlassian.net/rest/api/3/project/${projectKey}/versions`, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${new Buffer.from(
        jiraToken
      ).toString('base64')}`,
      'Accept': 'application/json'
    }
  })
    .then(response => {
      console.log(
        `Response: ${response.status} ${response.statusText}`
      );

      const res = response.json();

      console.log(res, 'res');

      core.setOutput('versionId', res.find(({name}) => name === versionName)?.id);
    })
    .then(text => console.log(text))
    .catch(err => console.error(err));
}

await getAllVersions();