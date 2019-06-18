/*
============================================
; Title: Assignment 3.4
; Author: Justin Singleton
; Date: 16 June 2019
; Description: This program demonstrates the
; use of loops: while, do/while, for, and
; for/in.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 3.4"));
// Variable declaration
var n = 7;
// Random number function
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}
// Match function
function match(n, r) {
  if (n === r) {
    return true;
  } else {
    return false;
  }
}
// Function for positive match
function logMatch(n, r) {
  console.log(n + " does match " + r + ".")
}
// Function for negative match
function logMismatch(n, r) {
  console.log(n + " does not match " + r + ".")
}
// Loop to generate random matches
for (let r = randomNumber(); r < 10; r++) {
  if (match(n, r)) {
    logMatch(n, r);
  } else {
    logMismatch(n, r)
    }
  }
