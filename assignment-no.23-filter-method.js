const arrayNum = [20,11,40,25,37,49,9,90,60,2,19];
const arrayEven = arrayNum.filter( (element) => {
    return element >50;
} );
console.log("1] find out all number which is greater than 50");


console.log(arrayEven);

console.log("2] find the even number ");

const arrayNum1 = [20,11,40,25,37,49,9,90,60,2,19];
const arrayEven1 = arrayNum1.filter( (element) => {
    return element %2==0;
} );
console.log(arrayEven1);


console.log("3] find the odd number ");
const arrayNum2 = [20,11,40,25,37,49,9,90,60,2,19];
const arrayEven2 = arrayNum2.filter( (element) => {
    return element %2!=0;
} );
console.log(arrayEven2);


console.log("4] find out all number which multiple 5");
const arrayNum3 = [20,11,40,25,37,49,9,90,60,2,19];
const arrayEven3 = arrayNum3.filter( (element) => {
    return element %5==0;
} );
console.log(arrayEven3);



console.log("5] all number which are between 20 and 50");

const numbersBetween20And50 = arrayNum2.filter((element) => {
    return element > 20 && element < 50; // Check if the number is between 20 and 50
});

console.log(numbersBetween20And50);







    


