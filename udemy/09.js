/* reverse - recursion - udemy
Write a * recursive function* that accepts a string and returns the new string in reverse.

    Examples:
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'

*/
// My Solution:
function reverse(str){
    if (str.length <= 1) {
        return str;
    }
    let result = reverse(str.slice(1)) + str[0];
    return result;
}

// My Solution - not recursive
function reverse(str){
	let first = 0;
	let last = str.length;
	let input = str.split('');
	while (first < last) {
		let firstChar = input[first];
		input[first] = input[last];
		input[last] = firstChar;
		first++;
		last--;
	}
	return input.join('');
}
