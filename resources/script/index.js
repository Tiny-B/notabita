/* font selection
// add images
// add tables
// formatting, add header 1,2,3,3, bullet lists
// add horizontal line
// insert links
// font sizing 1x 2x 3x ect
// ai assistant helps with current note and can answer questions or give info you need
// font style and alignment
// save, edit and delete
// download note
// spell checker
// text highlighting
// font color
// theme selector
// header and footer
  stats display, word count etc */

const { error } = require('console');

console.info('Hi there');

function reverseString(str) {
	if (str === '') throw new Error('Cannot be empty');
	if (typeof str !== 'string') throw new TypeError('Not a string');
	let reverse = str.split('').reverse().join('');
	return reverse;
}

function is_palindrome(str) {
	if (str === '') throw new Error('Cannot be empty');
	if (typeof str !== 'string') throw new TypeError('Not a string');
	return reverseString(str) === str;
}

module.exports = { reverseString, is_palindrome };
