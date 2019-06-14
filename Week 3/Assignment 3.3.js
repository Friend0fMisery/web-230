/*
============================================
; Title: Assignment 3.3
; Author: Justin Singleton
; Date: 14 June 2019
; Description: This program demonstrates the
; use of Control statements.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 3.3"));

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// Beginning logic for switch functionality
let eventKeyCode = 13
// Switch functionality for multiple cases
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log("The shift key was pressed.");
    break;
  case 32:
    console.log("The spacebar key was pressed.");
    break;
  case 8:
    console.log("The backspace / delete key was pressed.");
  default:
    console.log("Unrecognized key.")
}
