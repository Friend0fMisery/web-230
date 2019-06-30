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

lastNames.some("Lennon").forEach(function(lastName) {
  console.log("Composer: " + lastName)
  ratings.map(function(rating) {
  console.log("Rating: " + rating + "\n")}
)})

console.log("-- COMPOSER BY GENRE --");

lastNames.forEach (function(lastName) {
  console.log("Genre: " + genre + "\n" + "Composer: " + lastName + "\n")
})
