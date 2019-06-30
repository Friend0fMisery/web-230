/*
============================================
; Title: Assignment 5.4
; Author: Justin Singleton
; Date: 29 June 2019
; Description: This program demonstrates the
; use of filtering/reducing complex data
; structures.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 5.4"));
// create variable with sets of information for later usage
var composers = [
  {
  firstName: 'Ludwig',
  lastName: 'Beethoven',
  genre: 'Classical',
  rating: 10
  },
  {
  firstName: 'James',
  lastName: 'Hetfield',
  genre: 'Metal',
  rating: 8
  },
  {
  firstName: 'Michael',
  lastName: 'Jackson',
  genre: 'Pop',
  rating: 9
  },
  {
  firstName: 'Elvis',
  lastName: 'Presley',
  genre: 'Rock',
  rating: 6
  },
  {
  firstName: 'John',
  lastName: 'Lennon',
  genre: 'Rock',
  rating: 9
  },
]
// create variables to access information within sets of composers variable
var lastNames = composers.map(function (composer) {
  return composer.lastName
})
var ratings = composers.map(function (composer) {
  return composer.rating
});
var genres = composers.map(function (composer) {
  return composer.genre
})

console.log("\n" + "-- COMPOSER BY RATING --");
// prints all corresponding ratings and composers names together
lastNames.forEach (function(values) {
  console.log("Rating: " + ratings.shift())
  console.log("Composer: " + values + "\n")
  }
)

console.log("-- COMPOSER BY GENRE --");
// prints all corresponding genres and composers names together
lastNames.forEach (function(values) {
  console.log("Genre: " + genres.shift())
  console.log("Composer: " + values + "\n")
  }
)
