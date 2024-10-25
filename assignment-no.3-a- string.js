var greet = "Hey you are doing good,  keep it up ";
console.log(" 1.Given String is:  ", greet, );

console.log("===========================================");


console.log(`2. length of string is: ${greet.length}`);
console.log("===========================================");


//trim
// console.log(`Total length : ${greet.length}`);
var result = greet.trim();
console.log(`3. After trim: ${result}, and it's length : ${result.length}`);
console.log("===========================================");


var charAtIndex0 = greet.charAt(0);
console.log(`4.First letter is  : ${charAtIndex0}`);
var charAtIndex0 = greet.charAt(34);
console.log(`last letter is  : ${charAtIndex0}`);
console.log("===========================================");


//  var charAtLastIndex =  greet.length();
//  console.log(`5.Total number word are : ${charAtLastIndex.length}`);
//  console.log("===========================================");



 var charAtIndex0 = greet.indexOf("g")
console.log(`6.Index of word ' good' is  : ${charAtIndex0}`);
 console.log("===========================================");


var charAtIndex0 = greet.substring(22);
console.log(`7.Substring startning from index 22  : ${charAtIndex0}`);
console.log("===========================================");



var charAtIndex0 = greet.startsWith("Hey");
console.log(`9.Does the string startwith ? : ${charAtIndex0}`);

console.log("===========================================");

var charAtIndex0 = greet.endsWith("it");
console.log(`9.Does the string endtwith  ?: ${charAtIndex0}`);


























