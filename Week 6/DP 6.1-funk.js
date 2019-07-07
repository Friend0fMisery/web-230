/*
=================================================================
; Title:  Assignment 6.1 with two errors in code.
; Author: developerdrive.com
; Modified by: Karie Funk
; Date:   03 July 2019
; Description: Creating an object, with error.
;================================================================
*/

//WHAT SHOULD DISPLAY
/*
Karie Funk
Exercise 6.1
Date: 7/4/2019
Beatle Member: John Lennon
1940
Beatle Member: Paul McCartney
1942
*/

//HEADER

var header = require('./Funk-header.js');

console.log(header.display("Karie", "Funk", "Exercise 6.1"));

console.log("");

//START PROGRAM

//OBJECT.CREATE METHOD

//VARIABLE WITH VALUES THAT INCLUDES THREE PROPERTIES AND ONE METHOD
var user001 = {
  firstName: "John",
  lastName: "Lennon",
  dateOfBirth: 1940,


// added . between this and firstName //
getName: function(){
     return "Beatle Member: " + this.firstName + " " + this.lastName;

  }
};



var user002 = Object.create(user001);

user002.firstName = "Paul";
user002.lastName = "McCartney";
user002.dateOfBirth = 1942;




//OUTPUT
console.log(user001.getName());
// added second 0 in user001 since that is the actual object //
console.log(user001.dateOfBirth);


console.log("");


console.log(user002.getName());


console.log(user002.dateOfBirth);

