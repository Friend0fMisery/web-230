/*
============================================
; Title: Assignment 4.2
; Author: Justin Singleton
; Date: 21 June 2019
; Description: This program demonstrates the
; use of arrays.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 4.2"));
// array list of five fruit
var fruit = ["orange", "apple", "banana", "grapes", "cherry"]
// function to list arrays
function getFruit(arr) {
  for (var k = 0; k < arr.length; k++){
    console.log(arr[k]);
  }
}
// call function with fruit array
getFruit(fruit);
