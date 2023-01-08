//1. Write a function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getTypeOf(value) {
    return typeof value;
  }
  getTypeOf("name");
  
  getTypeOf(true);
  
  getTypeOf(5);
  
  getTypeOf({});
  
  getTypeOf(undefined);
  
  getTypeOf(Number());
  
  //2. Write a function that accepts a number as a parameter and check the number is prime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
  function isPrimeNumber(n) {
    if (n === 1) {
      return false;
    } else if (n === 2) {
      return true;
    } else {
      for (let x = 2; x < n; x++) {
        if (n % x === 0) {
          return false;
        }
      }
      return true;
    }
  }
  isPrimeNumber(9);
  // Write a function that will accept two strings and will convert first argument to a currency requested in second argument:
  //     a. First argument will be currency that needs to be converted. for example: '$10'
  //     b. Second argument will be currency that first argument needs to be converted to. For example: 'dollars', 'euros'
  //    Constraints:
  //     a. Lets assume the first letter in the first argument will always start with currency prefix ($, S)
  //     b. Function should only convert euros to dollars and vice-versa
  //     c. Use these conversion rates:
  //         i. €1 = $1.05
  //         ii. $1 = €0.95
  
  // function convertCurrency($10, euros) {
  //   if (euros) {
  //     return Intl.NumberFormat(10) * 1.05;
  //   }
  //   if (dollars) {
  //     return Intl.NumberFormat($10) * 0.95;
  //   }
  // }
  // convertCurrency($10);
  // 4. Write a function that accepts an argument that is a function and invokes it. Passed function should log in the console 'Hello'.
  function sayHello() {
    console.log("hello");
    return function () {
      console.log("Boo");
    };
  }
  setTimeout(sayHello(), 5);
  
  // 5. Write a function that converts Fahrenheit to Celcius. Note: formula for convertion: (x - 32) * 0.5556.
  function convertTemperature(temperature) {
    return (temperature - 32) * 0, 5556;
  }
  console.log(convertTemperature(98));
  // 6. Write a function that calculates area of a given rectangle. Note: formula for calculation: x*y.
  
  function calculateAreaOfRectangle(x, y) {
    const result = x * y;
    return result;
  }
  console.log(calculateAreaOfRectangle(5, 6));
  
  // 7. Write a function to find the area and perimeter of a circle. Note: formula for perimeter (x stands for radius( apskritimo spindulys ) and π stands for Pi): 2 * π * x. formula for area: π * x * x.
  
  function findAreaAndPerimeterOfCircle(radius) {
    const perimeter = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    const result = `Circle of radius ${radius} has permiter of ${perimeter} and area of ${area}`;
    return result;
  }
  console.log(findAreaAndPerimeterOfCircle(10));
  
  //    Constraints:
  //     a. It should return a string in this format: 'Circle of radius 10 has permiter of 62.83 and area of 314.15'
  // 8. Write a function that takes two arguments and generates a random number in between them. For example: getRandomNumber(1, 10) should return me a number that is between 1 and 10.
  function getRandomNumber(a, b) {
    return Math.floor(Math.random() * b + a);
  }
  getRandomNumber(1, 10);
  console.log(getRandomNumber(1, 10));
  
  // BONUS: Write a function to find factorial of a number. Note factorial number formula (if x = 1 or x = 0, then its factorial is 1): x * (x - 1) * (x - 2) * ...
  //     Example case result: getFactorial(0) should return 120 because 5 * (5 - 1) * (5 - 2) * (5 - 3) * (5 - 4) = 120
  //     Some material to get accustomed with factorials:
  //         a. English version ( https://en.wikipedia.org/wiki/Factorial )
  //         b. Lithuanian version ( https://lt.wikipedia.org/wiki/Faktorialas )
  //     Tips: just like in math you will have to use recursive functions to calculate factorial. If you need you can read more about it in here https://www.javascripttutorial.net/javascript-recursive-function/
  function factorial(n) {
    if (n < 0) {
      return "number has to be positive.";
    }
  
    //base case
    if (n == 0 || n == 1) {
      return 1;
      //recursive case
    } else {
      return n * factorial(n - 1);
    }
  }
  let n = 5;
  answer = factorial(n);
  console.log("Factorial of " + n + " : " + answer);