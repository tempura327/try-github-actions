const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('name');
  console.log(`Hello ${nameToGreet}!. How's it going with your new workflow?`);

  // 透過github context可以取得觸發workflow的相關資訊
  const repoName = github.context.payload.repository;
  core.setOutput(`reply', 'It\'s amazing. I installed actions/toolkit to my repo. With the package, I can write a workflow with JavaScript in ${repoName}.`);
  
} catch (error) {
  // 印出error，並拋出錯誤讓整個workflow失敗
  core.setFailed(error.message, 1);
}