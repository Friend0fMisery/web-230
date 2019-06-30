/*
============================================
; Title: Assignment 5.2
; Author: Justin Singleton
; Date: 29 June 2019
; Description: This program demonstrates the
; use of ES5 Built-in Functions.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 5.2"));

var foods = ["Steak", "Pasta", "Burritos", "Burgers", "Chicken"];

foods.forEach(function(num) {
  console.log(num);
})
