var greet = "Good Morning";
console.log("Given String is:  ", greet, " and it's length is: ", greet.length);

// ES6 - String Template
// ${} - Variable substitution
console.log(`Given String is: ${greet}, and it's length is: ${greet.length}`);

var charAtIndex0 = greet.charAt(0);
console.log(`Character at index 0 is : ${charAtIndex0}`);

var charAtIndex7 = greet.charAt(7);
console.log(`Character at index 7 is : ${charAtIndex7}`);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log(`Character at last index is : ${charAtLastIndex}`);

var firstName = "Elon";
var lastName = " Musk";
var concatResult = firstName.concat(lastName);
console.log(` Concat result: ${concatResult}`);

var greet = "Good Morning";
console.log("Given String is:  ", greet, " and it's length is: ", greet.length);

// ES6 - String Template
// ${} - Variable substitution
console.log(`Given String is: ${greet}, and it's length is: ${greet.length}`);

var charAtIndex0 = greet.charAt(0);
console.log(`Character at index 0 is : ${charAtIndex0}`);

var charAtIndex7 = greet.charAt(7);
console.log(`Character at index 7 is : ${charAtIndex7}`);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log(`Character at last index is : ${charAtLastIndex}`);

var firstName = "Elon";
var lastName = " Musk";
var concatResult = firstName.concat(lastName);
console.log(` Concat result: ${concatResult}`);

console.log("==== toUpperCase() ====");
var greet = "good morning";
var result = greet.toUpperCase();
console.log(result);

console.log("==== toLowerCase() ====");
var firstName = "ELon";
var result = firstName.toLowerCase();
console.log(result);

console.log("==== trim() ====");
var city = "    Pune   ";
console.log(`Total length : ${city.length}`);
var result = city.trim();
console.log(`city: ${result}, and it's length : ${result.length}`);



console.log("==== includes() ====");
var myLove = "I love only JavaScript";
var result = myLove.includes("only");
console.log(`Given string : ${myLove} and includes word only - ${result}`);

console.log("==== search() ====");
var myLove = "I love only JavaScript";
var result = myLove.search("only");
console.log(`Given string : ${myLove} and search word only - ${result}`);


console.log("==== slice() ====");
var myLove = "I love only JavaScript";
var result = myLove.slice(2, 6);
console.log(result);