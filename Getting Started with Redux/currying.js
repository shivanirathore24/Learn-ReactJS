/*
  ================================
  NORMAL FUNCTION (NO CURRYING)
  ================================
  - Takes all arguments at once
  - Simple and straightforward
  - Example: sum(10, 20, 30)
*/

// function sum(x, y, z) {
//   return x + y + z;
// }

// const result = sum(10, 20, 30);
// console.log(result); // 60

/*
  ================================
  CURRYING IN JAVASCRIPT
  ================================
  - Breaks a function into multiple nested functions
  - Each function takes ONE argument
  - Uses closures to remember previous values
  - Example: sumX(10)(20)(30)
*/

function sumX(x) {
  // First function receives x
  return function sumY(y) {
    // Second function receives y and remembers x
    return function sumZ(z) {
      // Third function receives z and has access to x and y
      return x + y + z;
    };
  };
}

/*
  ================================
  STEP-BY-STEP EXECUTION
  ================================
*/

const resultSumX = sumX(10);
console.log(resultSumX);
// Output: [Function: sumY]
// Explanation: sumX returns the next function (sumY)

const resultSumY = resultSumX(20);
console.log(resultSumY);
// Output: [Function: sumZ]
// Explanation: sumY returns the next function (sumZ)

const result = resultSumY(30);
console.log(result);
// Output: 60
// Explanation: sumZ calculates x + y + z

/*
  ================================
  SHORT CURRIED VERSION (MODERN JS)
  ================================
  - Using arrow functions
  - Cleaner and commonly used in React/Redux
*/

const sum = (x) => (y) => (z) => x + y + z;

console.log(sum(10)(20)(30)); // 60

/*
  ================================
  KEY DIFFERENCE
  ================================
  Normal Function  → sum(10, 20, 30)
  Curried Function → sum(10)(20)(30)
*/
