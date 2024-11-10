let fruitnamearray= ["Banana","orange","Apple","Mango","Watermelon"];
console.log(fruitnamearray);

console.log("1] first element in array ");
let firstelement=fruitnamearray[0]
console.log(firstelement)

console.log("2] last element in array ");
totallength=fruitnamearray.length
let lastelemnt= fruitnamearray [totallength-1]
console.log(lastelemnt);

console.log("3] Add element before first element in array list ");
fruitnamearray[0]="papaya";
 console.log(fruitnamearray)

console.log("4] Remove element in array lis")
fruitnamearray.splice(2,1)
console.log(fruitnamearray)

console.log("5] insert element last index in array list");
fruitnamearray.push("kivi")
console.log(fruitnamearray)

console.log("6] insert an element dragan fruit before water melon**")
fruitnamearray.splice(3,0,["dragan fruit"])
 console.log(fruitnamearray)

console.log("7] replace an element orange with kivi")
fruitnamearray.splice(1,1,"kivi")
console.log(fruitnamearray)

console.log("8]The element starting from index 1 to 4")
fruitnamearray.splice(1,4)
console.log(fruitnamearray)

console.log("9] only select last 3 element and log an console :use the length property ");
fruitnamearray.splice(fruitnamearray.length-3)
console.log(fruitnamearray)
























