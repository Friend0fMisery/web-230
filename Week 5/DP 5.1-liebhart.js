/*
============================================
; Title: Assignment 5.1 reply
; Author: Nathaniel Liebhart
; Date: 30 June 2019
; Modified By: Justin Singleton
; Description: This program demonstrates the
; use of keyed collections and is corrected.
;===========================================
*/

var num1 = [45, 4, 9, 16, 25];
var num2 = num1.map(myFunc);
// changed 'const myFunc = value =>' to 'function myFunc(value)' //
// this helps declare myFunc as a function //
function myFunc(value) {
	return value * 2;
};

console.log(num2);
