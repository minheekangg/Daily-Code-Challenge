/* 
    isSubsequence - multiple pointers - udemy
    Write a function that takes in two strings and checks whether the characters in first string form a subsequence of characters in second string.In other words, the function should check whether the characters in the first string appear somewhere in the second string * without their order changing *

    Examples:
        isSubsequence(‘hello’, ‘hello world’) //true
        isSubsequence(‘sing’, ‘string’) // true
        isSubsequence(‘abc’, ‘abracadabra’) //true
        isSubsequence(‘abc’, ‘acb’) //false(order matters) 
*/

// My solution:
function isSubsequence(shortString, longString) {
    let copyLongString = longString;
  for (let i=0; i < shortString.length -1; i++) {
      if (copyLongString.length < 0) { return false }
      
      let idx = copyLongString.indexOf(shortString[i]);
      if ( idx !== -1) {
        copyLongString = copyLongString.slice(idx);
      }
      return true;
  } 
}

// Solution - Iterative
function isSubsequence(str1, str2) {
	var i=0;
	var j=0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if(i === str1.length) return true;
		j++;
	}
	return false;
}

// Solution - Recursive but not O(1) space
function isSubsequence(str1, str2) {
	if(str1.length ===0) return true;
	if(str2.length ===0) return true;
    if(str2[0]===str1[0]) return isSubsequence(str.slice(1));
    return isSubsequence(str1, slice(1))
}