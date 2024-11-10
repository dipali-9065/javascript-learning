console.log(" Find the even number from array");
let array=[10,20,45,30,77,60];
 let countevenNo=0;
for (const element of array) 
    {
        if(element%2==0)
        {
            console.log(element);
            
            countevenNo=+countevenNo+1;
        }
    
}
console.log(`even number from array is:${countevenNo}`);

console.log("======================================");



console.log("WAP to count vowels including lower and upper case");
const mylove="I Love only JavaScript";
const vowels= "aeiou";
let counterVowels = 0;
for (const char of mylove)
     {
        if(vowels.includes(char.toLowerCase()));
        {
            counterVowels= counterVowels+1 ;
        }
}
// console.log(`vowels count is  :${counterVowels}`);
console.log(`vowels count is ${counterVowels}`);



console.log("======================================");

console.log("WAP to count the character including  upper and lower character");
 const sentence="JavaScript LANGUAGE"
 charcounter=0;
for (const char of sentence) 
    {
        if(char=="a"|| char=="A")
        {
            charcounter=charcounter+1; 
        }
    
}
console.log(charcounter);

    
 








