"use strict";
// import myFunc from '../index'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// it('expect myFunc(5) to eqaul 25', () => {
//     expect(myFunc(5)).toEqual(25);
// });
const numbers_1 = __importDefault(require("../utilities/numbers"));
const numbers_2 = __importDefault(require("../utilities/numbers"));
const numbers_3 = __importDefault(require("../utilities/numbers"));
const arrays_1 = __importDefault(require("../utilities/arrays"));
const arrays_2 = __importDefault(require("../utilities/arrays"));
const arrays_3 = __importDefault(require("../utilities/arrays"));
it('add two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    const res = arrays_3.default.concatArr(arr1, arr2);
    expect(res).toEqual([1, 2, 3, 'a', 'b', 'c']);
});
it('add elements of an array', () => {
    const arr1 = [1, 2, 3];
    const res = arrays_2.default.addArr(arr1);
    expect(res).toEqual(6);
});
it('return largest elements of an array', () => {
    const arr1 = [1, 2, 3];
    const res = arrays_1.default.lgNum(arr1);
    expect(res).toBeTruthy();
});
it('return true for positive numbers', () => {
    const res = numbers_3.default.square(4);
    expect(res).toBeGreaterThan(4);
});
it('return false', () => {
    const res = numbers_1.default.multiply(0, 8);
    expect(res).toBeFalsy();
});
it('return true for positive numbers', () => {
    const res = numbers_2.default.sum(4, 4);
    expect(res).toBeGreaterThanOrEqual(4);
});
