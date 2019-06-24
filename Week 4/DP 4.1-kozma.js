/*
============================================
; Title: Assignment 4.1
; Author: Keith Kozma
; Date: 23 June 2019
; Modified By: Justin Singleton
; Description: Using a modified exercise
; from w3resources, this file contains
; multiple corrected errors.
;===========================================
*/

// removed space after Japan to make better looking output //
var favCountries = ["Japan", "Spain", "Italy", "New Zealand", "Australia"];
// added + 1 after i%100 so that list begins at 1 //
function Order(i) {
 var place = ["th","st","nd","rd"],
 x = i%100 + 1;
 return x+(place[(x+20)%10]||place[x]||place[0]);
}
// moved this line from within the for loop so it only prints once //
console.log("This is a list of Countries I would like to travel to: ", "\n");
// changed >= to < for more accurate syntax //
for(i = 0; i < favCountries.length; i++){
 var aT = i + 1;
// changed favCountries(aT) to favCountries[aT] for array not function //
 var output = (Order(i) + " choice is " + favCountries[i]);
console.log(output);
}
