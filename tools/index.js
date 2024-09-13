import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const userName = argv.name;

console.log(`Hello ${userName}. How's it going with your new workflow?`);

console.log('echo"reply=It\'s good. I\'m try to run JS file in it." >> GITHUB_OUTPUT')