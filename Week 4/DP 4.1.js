/*
============================================
; Title: Assignment 4.1
; Author: Justin Singleton
; Date: 19 June 2019
; Description: This program demonstrates the
; use of arrays and has two intentional
; errors.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 4.1"));
// Array with scrambled letters
var scramble = ["e", "l", "H", "o", "W", "d", "r"]
// function to unscramble letters in array
function unscramble() {
  console.log(scramble[2] + scramble[0] + scramble[1] + scramble[1] + scramble[3] + ", " + scramble[4] +
  scramble[3] + scramble[6] + scramble[1] + scramble[5])
}
// call the funtion
console.log(unscramble())
// expected output
// Hello, World!
