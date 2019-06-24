/*
============================================
; Title: Assignment 4.4
; Author: Justin Singleton
; Date: 24 June 2019
; Modified By: <Your name>
; Description: This program demonstrates the
; use of JavaScript filters.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 4.4"));

// array of states
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
// function to make elements equal values
function getStates(el, value) {
  return el === value;
}
// header ORIGINAL ARRAY
console.log("");
console.log("-- ORIGINAL ARRAY --" );
console.log("");
// lists items within states array
states.forEach(function(item) {
  console.log(item)
})
// header SORTED ARRAY
console.log("");
console.log("-- SORTED ARRAY --" );
console.log("");
// sorts states array and lists sorted array
var sortStates = states.sort();
sortStates.forEach(function(item) {
  console.log(item)
})
// header SELECTED VALUE
console.log("");
console.log("-- SELECTED VALUE --" );
console.log("");
// chooses Iowa from array and prints value
console.log(states.filter(
  function(el) {
    return getStates(el, "Iowa")
  }
) [0]
);
