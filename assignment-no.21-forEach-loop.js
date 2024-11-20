

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



