import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const userName = argv.name;

console.log(`Hello ${userName}. How's it going with your new workflow?`);

console.log('It\'s good. I\'m try to run JS file in it.')