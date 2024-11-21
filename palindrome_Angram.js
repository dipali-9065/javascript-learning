console.log("1] write a function to check whether given string is palidrome or not");
function isPalindrome(str) {
    // Reverse the string and compare it with the original string
    return str === str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log("madam :");
  console.log(isPalindrome('madam'));  // true
  console.log("hello:");
  console.log(isPalindrome('hello')); 

  console.log("2] write a function given string is anagram or not");

  function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  // Example usage:
  console.log("'silent', 'listen'=");
  
  console.log(isAnagram('silent', 'listen')); // true

  console.log("'hello', 'world'=");
  
  console.log(isAnagram('hello', 'world'));   // false
  