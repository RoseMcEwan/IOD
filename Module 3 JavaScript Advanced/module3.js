/*1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/

function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(1, 1);
let counter2 = makeCounter(3, 3);
counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2

/*2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why? It's in order of how much time it takes to display 
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.*/

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

const timers = [
  setTimeout(delayMsg, 100, "#1: Delayed by 100ms"),
  setTimeout(delayMsg, 20, "#2: Delayed by 20ms"),
  setTimeout(delayMsg, 0, "#3: Delayed by 0ms"),
  setTimeout(delayMsg, 1100, "#3: Delayed by 1100ms"),
];
delayMsg("#4: Not delayed at all");

setTimeout(() => timers.forEach(clearTimeout), 500);

/*3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.*/

function printMe(msg) {
  console.log(msg);
}

const debounce = (funct, ms) => {
  //decorator function
  let timer;

  return (msg) => {
    //New function
    clearTimeout(timer);
    timer = setTimeout(() => {
      funct(msg);
    }, ms);
  };
};

printMe = debounce(printMe, 1000); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

/*4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.*/

/*a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.*/

/*const printFibonacci = () => {
let fibonacci1 = 1;
let fibonacci2 = 1;

setInterval(() => {
  console.log(fibonacci1);

  let result = (fibonacci1 + fibonacci2);
  fibonacci1 = fibonacci2;
  fibonacci2 = result;
}, 1000);
};
printFibonacci(); remove '/ *'  '* /' to make it work */

/*b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing.  &   c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.*/

const printFibonacciTimeouts = (limit) => {
  let fNested1 = 1;
  let fNested2 = 1;
  let count = 0;

  const FNestedTimeout = setInterval(() => {
    console.log(fNested1);
    count++;

    let resultNested = fNested1 + fNested2;
    fNested1 = fNested2;
    fNested2 = resultNested;

    if (count >= limit) {
      clearInterval(FNestedTimeout);
    }
  }, 1000);
};
printFibonacciTimeouts(5);

/* 5) The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?*/

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works

setTimeout(() => {
  car.description();
}, 4000);

/*Change the year for the car by creating a clone of the original and overriding it*/

const userClone = {};

for (let key in car) {
  userClone[key] = car[key];
}
userClone.year = 2025;

const boundDescription = userClone.description.bind(userClone);

setTimeout(boundDescription, 200);

console.log(userClone);
car.description();

/*c) Does the delayed description() call use the original values or the new values from
b)? Why? Because you're calling car not userClone.
e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
*/

const userClone2 = {};

for (let key in car) {
  userClone2[key] = car[key];
}
userClone2.make = "Toyota";
userClone2.year = 2001;
userClone2.description();
setTimeout(boundDescription, 7000);

/*6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.*/

/*a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters*/
function multiply(a, b) {
  console.log(a * b);
}

Function.prototype.delay = function (ms) {
  return (a, b) => {
    setTimeout(() => {
      this(a, b);
    }, ms);
  };
};
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

/*b) Use apply to improve your solution so that delayed functions can take any number of
parameters*/

function multiply(a, b) {
  console.log(a * b);
}

Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => {
      this.apply(null, args);
    }, ms);
  };
};
multiply.delay(600)(5, 10); // prints 50 after 600 milliseconds

/*c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works.*/

function multiply4(a, b, c, d) {
  console.log(a * b * c * d);
}

Function.prototype.delay = function (ms) {
  return (a, b, c, d) => {
    setTimeout(() => {
      this(a, b, c, d);
    }, ms);
  };
};
multiply4.delay(700)(5, 5, 5, 5); // prints 25 after 700 milliseconds

/*7. The following DigitalClock class uses an interval to print the time every second once
started, until stopped */

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

/*a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied. - remove start to make it work*/

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

//const myClock = new PrecisionClock("My clock:", 500);

//myClock.start();

/*b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.*/

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    super.display();

    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    if (currentTime === this.wakeupTime) {
      console.log("Wake Up");
      this.stop();
    }
  }
}

//const alarm = new AlarmClock("Alarm clock:", "18:53");

//alarm.start();

/*8. Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.
a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not
b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string
c) Extend the decorator function to validate as strings all arguments passed to fn
d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments*/

function orderItems(...itemName) {
  return `Order placed for: ${itemName.join(", ")}`;
}

const validateStringArg = (fn) => {
  //decorator function
  return (...arg) => {
    for (const item of arg) {
      if (typeof item !== "string") {
        throw new Error("error");
      }
    }

    return fn(...arg);
  };
};

const validatedOrderItem = validateStringArg(orderItems);
try {
  console.log(validatedOrderItem("Apple Watch", "iPhone"));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(validatedOrderItem("Apple Watch", 123));
} catch (error) {
  console.log(error.message);
}

/* 9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value*/

function randomDelay() {
  // your code
}
randomDelay().then(() => console.log("There appears to have been a delay."));

/*a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below 
NOTE: remove the // to print the outcomes. */
function randomDelay() {
  const delay = Math.floor(Math.random() * 20 + 1) * 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

//randomDelay()
// .then(() => console.log("promise delay."));

//b) If the random delay is even
function randomDelayEven() {
  const delay = Math.floor(Math.random() * 20 + 1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve();
      } else {
        reject();
      }
    }, delay * 1000);
  });
}

//randomDelayEven()
// .then(() => console.log("Promise delay Even"));

//c) Update the testing code to catch rejected promises
function randomDelayCatch() {
  const delay = Math.floor(Math.random() * 20 + 1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve();
      } else {
        reject();
      }
    }, delay * 1000);
  });
}

//randomDelayCatch()
// .then(() => console.log("Promise delay catch."))
// .catch(() => console.log("failed."));

// d) Try to update the then and catch messages to include the random delay value*/

function randomDelayThen() {
  const delay = Math.floor(Math.random() * 20 + 1);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
}

randomDelayThen()
  .then((delay) => console.log(`The delay was ${delay}s.`))
  .catch((delay) => console.log(`Error returned. The delay was ${delay}s.`));

/*10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.*/

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'


async function fetchURL() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
 }

 async function fetchWrongURL() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/notfound');

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
 }

fetchURL()
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

fetchWrongURL()
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));