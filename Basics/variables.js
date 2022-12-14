/*
//Variables
let country = "Azerbaijan";
let continent = "Europe";
let population = 10000000;
console.log(country + " " + continent + " " + population);
//Data types
let isIsland = false;
let language;
console.log(
  isIsland + " " + country + " " + continent + " " + population + " " + language
);
//Coding challenge
let markMass = 78;
let johnMass = 92;
let johnHeight = 1.95;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
//Coding challange
const avarageScoreDolphins = (96 + 108 + 89) / 3;
const avarageScoreKoalas = (88 + 91 + 110) / 3;
if (avarageScoreDolphins == avarageScoreKoalas) console.log("DRAW");
else if (avarageScoreDolphins > avarageScoreKoalas)
  console.log("Dophins winner");
else console.log("Koalas winner");
//Coding challange
const bill = 350;
const tip = bill <= 300 && bill >= 25 ? (bill * 15) / 100 : (bill * 15) / 100;
console.log(
  `The bill was ${bill},the tip was ${tip} and the final value is ${bill + tip}`
);
//Functions
function getSum(a, b) {
  return a + b;
}
const sum = function(a, b) {
  return a + b;
};
//Coding challange
const calcAvarage = (a, b, c) => (a + b + c) / 3;
/*const dolphinsScore = calcAvarage(44, 23, 71);
const koalasScore = calcAvarage(65, 54, 49);
const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins < avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`Draw (${avgKoalas} vs ${avgDolphins})`);
  }
};
checkWinner(calcAvarage(440, 250, 71), calcAvarage(200, 150, 49));
//Arrays in JS
const person = ["Murad", "Abbaszade", 18, "Baku"];
const people = new Array();
people.push(person); //add element to back
people.pop(); //remove element from back
people.unshift(person); //add element to front
people.shift(); //remove element from front
people.includes("a"); //check value is present in array
people.indexOf("a"); //get index of value in array
people.length; //get length of the array
console.log(people[0]);
//Object in Javascript
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedetman",
  birthYear: 1991,
  friends: ["Michael", "Bob", "Jay"],
  age: function() {
    return 2022 - this.birthYear;
  }
};
const information = `${jonas.firstName} have ${
  jonas.friends.length
} friends and his best friend is ${jonas.friends[0]}`;
console.log(information);
console.log(jonas.firstName); //dot notation
console.log(jonas["firstName"]); //bracket notation
console.log(jonas.age());
//Coding challange
const mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  bmi: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const jonas2 = {
  name: "Mark",
  mass: 92,
  height: 1.95,
  bmi: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
console.log(mark.bmi());
console.log(jonas2.bmi());
const exampleArray = ["Murad", 18, "Abbaszade", ["A", "B", "C"]];
const typeArray = new Array();
for (let i = 0; i < exampleArray.length; i++) {
  typeArray[i] = typeof exampleArray[i];
}
for (let i = 0; i < exampleArray.length; i++) {
  console.log(typeArray[i]);
}

//Coding challange
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = function(bill) {
  return bill <= 300 && bill >= 25 ? (bill * 15) / 100 : (bill * 15) / 100;
};
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}
console.log(tips);
console.log(totals);
const calcAvarage2 = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAvarage2(totals));

//Coding challange
const printForecast = function(arr) {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      s += `...${arr[i]}*C in ${i + 1} days...`;
      return s;
    }
    s += `...${arr[i]}*C in ${i + 1} days`;
  }
  return s;
};
const arr = [17, 21, 23];
const s = printForecast(arr);
console.log(s);

//Array Destructring
[x, y, z] = [2, 3, 4];
const nestedArr = [2, 3, [5, 6, 7]];
[a, b, [c, d, e]] = nestedArr;
console.log(a, b, c, d, e);
[a, b] = [b, a];
console.log(a, b);

//Object Destructring
const team = {
  color: "red",
  members: ["A", "B", "C"],
  point: 0,
  printTeamInformation: function(color, members) {
    //Immediatly destructring
    console.log(color, members);
  }
};

team.printTeamInformation({
  color: "blue",
  members: ["a"]
});


//Spread and Rest operators
const restaurant = {
  name: "A",
  foods: ["B", "C", "E", "F"],
  makeFood: function(mainIngredient, ...otherIngredient) {
    //Rest
    console.log(mainIngredient);
    console.log(...otherIngredient);
  }
};
const numbers = function(a, b, c) {
  console.log(a, b, c);
};
numbers(...[1, 2, 3]);
restaurant.makeFood("onion", "cucumber", "patato");
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski"
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze"
    ]
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};
const [players1, players2] = game.players;
console.log(players1, players2); //1
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers); //2
const allPlayers = [...players1, ...players2];
console.log(allPlayers); //3
const players1Final = [...players1, "Tiago", "Courinho", "Perisic"];
console.log(players1Final); //4
const { team1: team1Odd, x: draw, team2: team2Odd } = game.odds;
console.log(team1Odd, draw, team2Odd); //5
const pringGoals = function(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
  }
};
pringGoals(["Hummels", "Seydayev", "Qarayev"]);
pringGoals(game.scored);
pringGoals("Hummels"); //6
game.odds.team1 < game.odds.team2 || console.log("Borussia");
game.odds.team1 < game.odds.team2 && console.log("Bayern");
