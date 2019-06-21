/*
============================================
; Title: Assignment 4.3
; Author: Justin Singleton
; Date: 21 June 2019
; Description: This program demonstrates the
; use of arrays.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 4.3"));

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

var cars = ["Honda", "Chevy", "BMW", "Ford", "Dodge"];

function getValue(arr, val) {
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] === val) {
      console.log(arr[k])
    }
  }
}

console.log("");
console.log("-- DISPLAYING ARRAY ITEMS --");

for (var x = 0; x < cars.length; x++) {
  console.log(cars[x]);
}

console.log("");
console.log("-- SELECTED VALUE --");

getValue(cars, "BMW");

console.log("");
console.log("-- SELECTED VALUE --");

getValue(cars, "Honda");
