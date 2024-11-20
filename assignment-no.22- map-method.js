console.log(" 1] Add 10 into each element ");

const arrayNum =[20,11,40,25,23,11,9,31,60,2,19]
const updatedArray = arrayNum.map(element => element +10);

console.log(updatedArray); 

console.log(" 2] cube the each element ");
const updatedArray1 = arrayNum.map(element => element * element * element);

console.log(updatedArray1); 

console.log("add the index value corresponding each array");

const updatedArray2 = arrayNum.map(element => (element * element * element)+3);

console.log(updatedArray2); 






