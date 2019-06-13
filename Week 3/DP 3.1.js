/*
============================================
; Title: Assignment 3.1
; Author: Justin Singleton
; Date: 13 June 2019
; Description: This program demonstrates for,
; while, if, and switch logic, and has two
; intentional mistakes.
;===========================================
*/
const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 3.1"));
// variables used for the statements of choice
var snacks = ["Popcorn", "Soda", "Candy", "Pretzels"];
var i = 0;
var text = "";
// to list choices in easy to read format
for (;snacks[i];) {
  text += snacks[i] ;
  i++;
}
// show list choices
console.log(text)
// defining choice
var choice = snacks[2]
// if/else for what will print when choice is made
// should work for all choices
if (choice = snacks[0]) {
  text = "Good Choice of " + snacks[0];
} else if (choice = snacks[1]) {
  text = "Good Choice of " + snacks[1];
} else if (choice = snacks[2]) {
  text = "Good Choice of " + snacks[2];
} else if (choice = snacks[3]) {
  text = "Good Choice of " + snacks[3];
}
else {
  text = "Please make a choice";
}
// display message of choice
console.log(text)
