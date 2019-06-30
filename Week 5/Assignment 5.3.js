/*
============================================
; Title: Assignment 5.3
; Author: Justin Singleton
; Date: 29 June 2019
; Description: This program demonstrates the
; use of Object Collections.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 5.3"));

var composers = [
  {
  firstName: 'Ludwig',
  lastName: 'Beethoven',
  genre: 'classical',
  rating: 10
  },
  {
  firstName: 'James',
  lastName: 'Hetfield',
  genre: 'metal',
  rating: 8
  },
  {
  firstName: 'Michael',
  lastName: 'Jackson',
  genre: 'pop',
  rating: 9
  },
  {
  firstName: 'Elvis',
  lastName: 'Presley',
  genre: 'rock',
  rating: 6
  },
  {
  firstName: 'John',
  lastName: 'Lennon',
  genre: 'rock',
  rating: 9
  },
]

composers.forEach(function(composer) {
  console.log(composer.firstName + " " + composer.lastName)
});
