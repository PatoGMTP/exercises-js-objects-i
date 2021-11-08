let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// {} is an empty object, just like [] is an empty array
// and just like '' is an empty string
let user = {};

user['firstName'] = 'Patricio';
user['lastName'] = 'Garcia';
user['currentLocation'] = 'Katy, TX';
user['favoriteSongs'] = ["It's The Right Time", 'All Star', 'Ave Maria'];
user['age'] = 26;

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}

console.log('Looks like you have great taste in music. Your favorite songs:');

// for (let i = 0; i < user['favoriteSongs'].length; i += 1) {
//   let songPosition = i + 1;
//   let songName = user['favoriteSongs'][i];

//   console.log(`${songPosition}. ${songName}`);
// }
printFavorites(user["favoriteSongs"]);

user["FavoriteFood"] = "Pasta";

if (user["FavoriteFood"] != "Pasta")
{
  console.log(user["FavoriteFood"],"is great, but pasta is better!");
}
else
{
  console.log("Great choice in food, pasta is the best!");
}

user['favoriteMovies'] = ["Spirited Away", 'Interstellar', 'Inside Out'];

console.log("Interesting choice of movies:");
let i = 0;
// for (const item in user["favoriteMovies"])
// {
//   console.log(i, ":" ,item);
//   i++
// }
printFavorites(user["favoriteMovies"]);

function printFavorites(items)
{
  for (let i = 0; i < items.length; i++)
  {
    console.log(`${i+1}.`,items[i]);
  }
}
