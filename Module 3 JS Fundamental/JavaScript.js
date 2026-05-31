/* 1) What are the results of these expressions:
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = 1
!true = false
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2  = NaN 
" -9 " + 5 = "-9 5"
" -9 " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
undefined == null = true
undefined === null = false 
" \t \n" - 2 = -2 */    
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);

/* 2) Which of the below are not giving the right answer? Why are they not correct? How can we
fix them?
let addition = three + four, because the answer is "34", let addition = number(three) + number(four)
let lessThan2 = thirty < four, because "3" comes before "4", let addition = Number(thirty) < Number(four)

//what is the value of the following expressions?
let addition = three + four = "34"
let multiplication = three * four = 12
let division = three / four = 0.75
let subtraction = three - four = -1 
let lessThan1 = three < four  = true
let lessThan2 = thirty < four = true  */ 

/* 3) Which of the following console.log messages will print? Why?
If statements always convert values to boolans, the code doesn't run if false so only the true ones print.
if (0) console.log('#1 zero is true') false 
if ("0") console.log('#2 zero is true') true - Non empty strings are true
if (null) console.log('null is true') false
if (-1) console.log('negative is true') true - Numbers not 0 or -0 are true 
if (1) console.log('positive is true') true  - Numbers not 0 or -0 are true */

/* 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do? 
-Values adding to higher than 10 changes the result from ? to :*/
let a = 10, b = 15;
let result = `${a} + ${b} is `;

result += (a + b < 10)
  ? 'less than 10'
  : 'greater than 10';

console.log(result);

/* 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.*/

function getGreeting(name) {
return 'Hello ' + name + '!';
}

const getGreetingExpression = function(name){
   return 'Hello ' + name + '!';
}

const getGreetingArrow = (name) => 'Hello ' + name + '!';

console.log(getGreeting('Rose'));
console.log(getGreetingExpression('Rose'));
console.log(getGreetingArrow('Rose'));

/* 6.a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.*/

const westley = {
name: 'Westley',
numFingers: 5
}
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo',
lastName: 'Smith',

greeting(person) {
let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName} `;
console.log(greeting + this.getCatchPhrase(person));
},
getCatchPhrase: (person) => 
 person.numFingers === 6
  ? "You killed my father. Prepare to die."
  : 'Nice to meet you.'
};
inigo.greeting(westley);
inigo.greeting(rugen);

/* 7. 7. The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.*/

const basketballGame = {
score: 0,
foul: 0,
freeThrow() {
this.score++;
return this;
},
basket() {
this.score += 2;
return this;
},
threePointer() {
this.score += 3;
return this; 
},
halfTime() {
console.log('Halftime score is '+this.score + ' foul count is '+this.foul);
return this; 
},
fullTime() {
    console.log('Fulltime score is '+this.score + ' foul count is '+this.foul);
    return this;
},
foulCount() {
    this.foul++;
    return this;
},
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.threePointer().basket().freeThrow().basket().freeThrow().foulCount().halfTime().fullTime();

/* 8 8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object. */

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney',
};

function objectArgument(object) {
for (let key in object) {
    console.log ('key: ' + key);
    console.log('value: ' + object[key]);
}
}

objectArgument(sydney);
/*9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why? 
-teamsports changed because it's an array so it didn't change the original 
-dog1 didn't change because it's a string so a copy was created
-Cat1 changed because it's an object so it didn't change the original
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];       //array
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };           //object 

let moreSports = [...teamSports];

moreSports.push('Rowing');
moreSports.unshift('Swimming');

console.log(moreSports);

let dog2 = dog1;
dog2 = "Rex";

console.log(dog1);
console.log(dog2);

let cat2 = {...cat1};
cat2.name = "Jane";

console.log(cat1);
console.log(cat2);

console.log(teamSports, dog1, cat1); 

/*10. The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.*/
function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;

this.canDrive = function() {
    return this.age >=16;
};

}

const person1 = new Person('John', 2);
const person2 = new Person('Alien', 99);


console.log(person1, person1.canDrive());
console.log(person2, person2.canDrive());

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
    return this.age >=16;
}
}

const person3 = new PersonClass('E.T', 100);

console.log(person3, person3.canDrive());