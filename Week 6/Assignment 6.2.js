/*
============================================
; Title: Assignment 6.2
; Author: Justin Singleton
; Date: 6 July 2019
; Description: This program demonstrates the
; use of exception handling.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 6.2"));

try {
  var x = 2;
  var y = 3;
if (x != y) throw "UnequalValueException";
  console.log(x + " does not equal " + y);
} catch (err) {
  console.log("\n" + "Catch clause: " + err);
} finally {
  console.log("Finally clause reached...");
}
