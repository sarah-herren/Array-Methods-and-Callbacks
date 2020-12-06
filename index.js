import { fifaData } from './fifa.js';

/*SAMPLE data set for name references
 const fifaData = {
    "Year": 1930,
    "Datetime": "13 Jul 1930 - 15:00",
    "Stage": "Group 1",
    "Stadium": "Pocitos",
    "City": "Montevideo",
    "Home Team Name": "France",
    "Home Team Goals": 4,
    "Away Team Goals": 1,
    "Away Team Name": "Mexico",
    "Win conditions": "",
    "Attendance": 4444,
    "Half-time Home Goals": 3,
    "Half-time Away Goals": 0,
    "Referee": "LOMBARDI Domingo (URU)",
    "Assistant 1": "CRISTOPHE Henry (BEL)",
    "Assistant 2": "REGO Gilberto (BRA)",
    "RoundID": 201,
    "MatchID": 1096,
    "Home Team Initials": "FRA",
    "Away Team Initials": "MEX"
  }, */

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
let fifa2014 = fifaData.filter(item => item["Year"] === 2014);
let fifa2014Final = fifa2014.filter(item => item["Stage"] === "Final");

console.log(fifa2014Final);
console.log(fifa2014Final[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final

console.log(fifa2014Final[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final

console.log(fifa2014Final[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final

console.log(fifa2014Final[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */

if (fifa2014Final[0]["Home Team Goals"] > fifa2014Final[0]["Away Team Goals"]) 
    console.log(fifa2014Final[0]["Home Team Name"])
    else if (fifa2014Final[0]["Home Team Goals"] === fifa2014Final[0]["Away Team Goals"]) 
    console.log("tie")
    else console.log(fifa2014Final[0]["Away Team Name"]);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(array) {
    const finals = fifaData.filter(item => item["Stage"] === "Final");
        return finals;
   
}
console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(callback) {
    const years = callback.map(item => item["Year"]);
    return years;
}

console.log(getYears(getFinals(fifaData)));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    
   const winners = callback.map(item => {
       if(item["Home Team Goals"] > item["Away Team Goals"]) {
           return item["Home Team Name"]
       } else if(item["Home Team Goals"] < item["Away Team Goals"]) {
        return item["Away Team Name"]
       } else {
           return item["Win conditions"].slice(0,6)
       } 
    })
    return winners
};
console.log(getWinners(getFinals(fifaData)));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

        function getWinnersByYear(callback2, callback) {
            const winnerString = [];
            for (let i=0; i < callback.length; i++) {
            winnerString.push(`In ${callback[i]}, ${callback2[i]} won the world cup!`)
            }
            return winnerString
    };
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and 
 round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callback) {

    console.log("this is what", getFinals(fifaData)[0]);
    const average = callback.reduce(function(accumulator, item) {
    return (accumulator + (item["Home Team Goals"]+item["Away Team Goals"]))
    },0)
    return (average/callback.length).toFixed(2);
}
console.log(getAverageGoals(getFinals(fifaData)));
/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
