// const fetch = require('node-fetch');
// const core = require('@actions/core');
import core from '@actions/core';

const today = new Date();
const releaseDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

const versionId = core.getInput('versionId');
const projectId = core.getInput('projectId');
const jiraToken = core.getInput('jiraToken');
const jiraDomain = core.getInput('jiraDomain');

// https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-version-id-put
const bodyData = `{
  "archived": true,
  "id": "${versionId}",
  "projectId": "${projectId}",
  "releaseDate": "${releaseDate}",
  "released": true,
}`;

console.log(bodyData)

await fetch(`https://${jiraDomain}.atlassian.net/rest/api/3/version/${versionId}`, {
  method: 'PUT',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      jiraToken
    ).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: bodyData
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));