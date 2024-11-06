var n1 = 10; 

var n2 = 5;

 

var result = n1 + n2;

console.log(`Addition (+) is: ${result} `);

 

var result = n1 - n2;

console.log(`Subtraction (-) is: ${result} `);

 

var result = n1 * n2;

console.log(`Multiplication (*) is: ${result} `);

 

var result = n1 ** n2;

console.log(`Exponential (**) is: ${result} `);

 

var result = n1 / n2; // 10/5

console.log(`Division (/) is: ${result} `);

 

var result = n1 % n2; // 10 % 5

console.log(`Modulus (%) is: ${result} `);


console.log("=============================================");




console.log("Comparison Operator");

var n1 = 10; var n2 = 20; var n3 = 10;

 

var result = n1>n2;

console.log(`Greater than operator (>): ${result}`); // false

 

var result = n1>n3;

console.log(`Greater than operator (>): ${result}`); // false

 

var result = n1>=n3;

console.log(`Greater than equal operator (>=): ${result}`); // true

 

var result = n1<n3;

console.log(`Less than operator (<): ${result}`); // false

 

var result = n1<=n3; // 10 <= 10

console.log(`Less than equal operator (<=): ${result}`); // true


console.log("========================================");

var n1 = 0;
var n2 = 0;
var result = 0 / 0;
console.log(result);
//NaN - Not a Number

var n2 = "100";
console.log(`n2 ${n2} and it's type is: ${typeof n2}`);

var n2 = +n2;
console.log(`n2 ${n2} and it's type is: ${typeof n2}`);

var n4 = "JavaScript";
n4 = +n4; // NaN
console.log(`n4 ${n4} and it's type is: ${typeof n4}`);

var result = 10 + true;
console.log(result);

var result = 10 - false;
console.log(result);
