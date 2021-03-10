const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = [];
rl.question('What\'s your name? Nicknames are also acceptable :) ', (name1) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              profile.push(name1, activity, music, meal, food, sport, superpower);
              console.log(`Thank you for ypur responses`);
              console.log(`Profile: ${profile[0]} loves listening to ${profile[2]} while doing ${profile[1]}, devouring ${profile[4]} for ${profile[5]}, prefers ${profile[6]} over any other sport, and is amazing at ${profile[7]} at inopportune times.`);
              rl.close();
            });  
          }); 
        });
      });
    });
  });
});  


