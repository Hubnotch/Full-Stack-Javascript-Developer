// NOTE: This code has not been converted to TypeScript yet
import arrays from './utilities/arrays.js';
import numbers from './utilities/numbers.js';
import strings from './utilities/strings.js';
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = arrays.addArr(numArr);
var mixArr = arrays.concatArr(numArr, wordArr);
var myNum = '15' % 2;
var five = parseInt('5');
// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));
