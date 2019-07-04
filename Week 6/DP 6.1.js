/*
============================================
; Title: Assignment 6.1
; Author: Justin Singleton
; Date: 4 July 2019
; Description: This program demonstrates the
; use of object properties, but has two
; intentional mistakes.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 6.1"));
// object person with its properties
var person = {
  firstName: 'Justin',
  lastName: 'Singleton',
  gender: 'male'
  birthday: 'date',
  eyeColor: 'brown'
};
// print initial properties
console.log(person.firstName, person.lastName, person.birthday, person.eyeColor);
// delete wrong properties
delete person.birthday;
delete person.eyeColor;
// show what deleted properties look like
console.log(person.firstName, person.lastName, person.birthday, person.eyeColor);
// add correct properties
person.birthday = "02 October 1995";
person.eyeColor = "Green";
// print statement with correct properties
console.log(person.firstName, person.lastName + " was born on " person.birthday +
" and his eye color is " + person.eyeColor);

/*
--- EXPECTED OUTPUT ---
Justin Singleton date brown
Justin Singleton undefined undefined
Justin Singleton was born on 02 October 1995 and his eye color is Green
-----------------------
*/
