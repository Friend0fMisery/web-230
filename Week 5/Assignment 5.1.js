/*
============================================
; Title: Assignment 1.4
; Author: Justin Singleton
; Date: 27 June 2019
; Description: This program demonstrates the
; use of keyed collection arrays and has
; intentional mistakes to be corrected.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 5.1"));
// creation of grouping drinks
var drinks = new Set();
// setting the grouping values and keys
drinks.set('Vodka', 'Lime');
drinks.set('Whiskey', 'Juice');
drinks.set('Gin', 'Coke');
drinks.set('Rum', 'Tonic');
drinks.set('Tequila', 'Redbull');

console.log("");
console.log("-- WRONG SET --");
console.log("");
// print values of drinks
for (var [key, value] of drink) {
    console.log(key + " goes with " + value);
}
// changing values of drinks
drinks.set('Vodka', 'Redbull');
drinks.set('Whiskey', 'Coke');
drinks.set('Gin', 'Tonic');
drinks.set('Rum', 'Juice');
drinks.set('Tequila', 'Lime');

console.log("");
console.log("-- CORRECT SET --");
console.log("");
// printing corrected values of drinks
for (var [key, value] of drink) {
    console.log[key + " goes with " + value];
}

/*
-----EXPECTED OUTPUT-----

-- WRONG SET --

Vodka goes with Lime
Whiskey goes with Juice
Gin goes with Coke
Rum goes with Tonic
Tequila goes with Redbull

-- CORRECT SET --

Vodka goes with Redbull
Whiskey goes with Coke
Gin goes with Tonic
Rum goes with Juice
Tequila goes with Lime
--------------------------
*/
