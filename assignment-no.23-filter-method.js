// const arrayNum = [20,11,40,25,37,49,9,90,60,2,19];
// const arrayEven = arrayNum.filter( (element) => {
//     return element >50;
// } );
// console.log("1] find out all number which is greater than 50");


// console.log(arrayEven);

// console.log("2] find the even number ");

// const arrayNum1 = [20,11,40,25,37,49,9,90,60,2,19];
// const arrayEven1 = arrayNum1.filter( (element) => {
//     return element %2==0;
// } );
// console.log(arrayEven1);


// console.log("3] find the odd number ");
// const arrayNum2 = [20,11,40,25,37,49,9,90,60,2,19];
// const arrayEven2 = arrayNum2.filter( (element) => {
//     return element %2!=0;
// } );
// console.log(arrayEven2);


// console.log("4] find out all number which multiple 5");
// const arrayNum3 = [20,11,40,25,37,49,9,90,60,2,19];
// const arrayEven3 = arrayNum3.filter( (element) => {
//     return element %5==0;
// } );
// console.log(arrayEven3);



// console.log("5] all number which are between 20 and 50");

// const numbersBetween20And50 = arrayNum2.filter((element) => {
//     return element > 20 && element < 50; // Check if the number is between 20 and 50
// });

// console.log(numbersBetween20And50);


// console.log(" 1] Add 10 into each element ");

// const arrayNum =[20,11,40,25,23,11,9,31,60,2,19]
// const updatedArray = arrayNum.map(element => element +10);

// console.log(updatedArray); 

// console.log(" 2] cube the each element ");
// const updatedArray1 = arrayNum.map(element => element * element * element);

// console.log(updatedArray1); 

// console.log("add the index value corresponding each array");

// const updatedArray2 = arrayNum.map(element => (element * element * element)+3);

// console.log(updatedArray2); 



console.log("======= Find Even Numbers ===========");
const arrayNum = [1, -7, 40, 502, -77, 91,0,108,89,-601];
console.log("1] Log the array element with its index using forEach with Arrow Function");
console.log(arrayNum)

console.log("2] Find the Positive Number");


arrayNum.forEach( (element) => {
    if (element>0) {
        console.log(element);   
    }
} );

console.log("3] Find The Negative Number");

arrayNum.forEach((element)=>
{
    if(element<0)
    {
        console.log(element);
        
    }

});

console.log("4] find the even number");
arrayNum.forEach((element)=>
{
    if(element %2==0)
    {
        console.log(element);
        
    }

});

console.log("5] find the sum of all element");
let sum = 0;

arrayNum.forEach((num) =>{
    sum += num; 
});

console.log(sum); 

console.log("6] log only even index value ");
arrayNum.forEach((index, element)=>
{
    if(index %2==0)
    {
        console.log(element);
        
    }
});
    


