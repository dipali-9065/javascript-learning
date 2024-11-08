let fruitnamearray= ["Banana","orange","Apple","Mango","Watermelon"];

console.log(fruitnamearray)

// console.log("***** print first and last element in array list")
// fruitnamearray(0)
// console.log(`first element is :${fruitnamearray}`)
//  let lastelement=fruitnamearray[fruitnamearray.length-1]

   
// console.log(`2.the last element array is: ${lastelement}`)


console.log("***** Add element before first element in array list*******")
fruitnamearray[0]="papaya";
console.log(`3.Add element before first element in array list : ${fruitnamearray}`)


console.log("***** Remove element in array list*******")
fruitnamearray.splice(2,1)
console.log(`4.Remove element in array list: ${fruitnamearray}`)


console.log("********* insert element last index in array list")
fruitnamearray.push("kivi")
console.log(`5.insert element last index in array list: ${fruitnamearray}`)

console.log("********* insert an element dragan fruit before water melon**")
fruitnamearray.splice(3,0,["dragan fruit"])
console.log(`6. insert an element dragan fruit before water melon: ${fruitnamearray}`)

console.log("********* replace an element orange with kivi**")
fruitnamearray.splice(1,1,"kivi")
console.log(`7.replace an element orange with kivi :${fruitnamearray}`)

console.log("********* The element starting from index 1 to 4**")
fruitnamearray.splice(1,4)
console.log(`8.The element starting from index 1 to 4 :${fruitnamearray}`)




console.log("**********")
fruitnamearray.splice(fruitnamearray.length-3)
console.log( `9.only select last 3 element and log an console :use the length property :${fruitnamearray}`)
















