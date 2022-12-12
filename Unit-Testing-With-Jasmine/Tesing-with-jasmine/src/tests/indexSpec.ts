import myFunc from '../index'

it('expect myFunc(5) to eqaul 25', () => {
    expect(myFunc(5)).toEqual(25);
});

import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it('should capitalize a string', () => {
    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
});

it('should be a sum greater than 10', () => {
    expect(numbers.sum(3, 10)).toBeGreaterThan(10);
});

it('multiply 3 by 5 and be 15', () => {
    expect(numbers.multiply(3, 5)).toEqual(15);
});

it('should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
});

it('should concatenate 2 arrays to not equal just 1', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
});

it('should not contain the third index', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
});

it('should not have a large number and be falsy', () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy();
});















// it('add two arrays', () => {
//     const arr1 = [1, 2, 3]
//     const arr2 = ['a', 'b', 'c']
//     const res = arrays.concatArr(arr1, arr2)
//     expect(res).toEqual([1, 2, 3, 'a', 'b', 'c'])
// })
// it('add elements of an array', () => {
//     const arr1 = [1, 2, 3]
//     const res = arrays.addArr(arr1)
//     expect(res).toEqual(6)
// })
// it('return largest elements of an array', () => {
//     const arr1 = [1, 2, 3]
//     const res = arrays.lgNum(arr1)
//     expect(res).toBeTruthy()
// })
// it('return true for positive numbers', () => {
//     const res = numbers.square(4)
//     expect(res).toBeGreaterThan(4)
// })
// it('return false', () => {
//     const res = numbers.multiply(0,8);
//     expect(res).toBeFalsy();
// })
// it('return true for positive numbers', () => {
//     const res = numbers.sum(4, 4)
//     expect(res).toBeGreaterThanOrEqual(4)
// })

