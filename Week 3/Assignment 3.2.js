/*
============================================
; Title: Assignment 3.2
; Author: Justin Singleton
; Date: 14 June 2019
; Description: This program demonstrates the
; use of Pattern Matching Functions.
;===========================================
*/
const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 3.2"));
// Variables
var local1 = "Sword"
var local2 = "Shield"
var local3 = "Hammer"
var local4 = "Staff"
var local5 = "Dagger"
var local6 = "Bow"
// Function to call equality of variables
function match(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
// Function to log mismatch of variables
function logMismatch(x, y) {
  console.log(x + " does not match " + y + ".")
}
// Function to log match of variables
function logMatch(x, y) {
  console.log(x + " matches " + y + ".")
}
// Conditionals of variables ran through functions
if (match(local1, local2)) {
  logMatch(local1, local2);
} else {
  logMismatch(local1, local2)
}

if (match(local3, local4)) {
  logMatch(local3, local4);
} else {
  logMismatch(local3, local4)
}

if (match(local5, local6)) {
  logMatch(local5, local6);
} else {
  logMismatch(local5, local6)
}
