 // Example usage:
 console.log("madam :");
 console.log(isPalindrome('madam'));  // true
 console.log("hello:");
 console.log(isPalindrome('hello')); 

 console.log("2] write a function given string is anagram or not");

 function isAnagram(str1, str2) {
   return str1.split('').sort().join('') === str2.split('').sort().join('');
 }