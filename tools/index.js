import minimist from 'minimist';


function main(){
  const argv = minimist(process.argv.slice(2));

  const userName = argv.name;

  // console.log(`Hello ${userName}. How's it going with your new workflow?`);

  // console.log('It\'s good. I\'m try to run JS file in it.');

  console.log(`ANSWER=Hello ${userName}. This is my answer." >> $GITHUB_OUTPUT`)
  console.log(`ANSWER2=Hello ${userName}. This is my answer." >> $GITHUB_ENV`)

  return `Hello ${userName}. This is my return value`;
}

export default main();