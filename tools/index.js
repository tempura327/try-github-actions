import minimist from 'minimist';


function main(){
  const argv = minimist(process.argv.slice(2));

  const userName = argv.name;

  console.log(`Hello ${userName}. How's it going with your new workflow?`);

  console.log('It\'s good. I\'m try to run JS file in it.');

  return 'this is return value';
}

export default main();