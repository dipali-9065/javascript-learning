function squareOfWordLength(GivenString)
{
    var GivenstringLength =GivenString.length;
       
     var result  =  GivenstringLength *  GivenstringLength;

     return result ;
}
var returnvalue = squareOfWordLength("javascript");
console.log(`given string is javascript and its length is :${returnvalue}`);

var returnvalue = squareOfWordLength("Google Chrome");
console.log(`given string is javascript and its length is :${returnvalue}`);

var returnvalue = squareOfWordLength("Web Developer Smart");
console.log(`given string is javascript and its length is :${returnvalue}`);

console.log("================================================");

function stringOperation(givenString)
{
    var length = givenString.length;

    var word= givenString.split(" ");

    var totalword = word.length;

    var strDevision= length / totalword;
    console.log( `the string devision is: ${strDevision}`);
    

    var strMultiply= length * totalword;
    console.log( `the string multiplication is: ${strMultiply}`);

  

}
 stringOperation("I am Angular Developer");








