/*
============================================
; Title: Assignment 2.4
; Author: Justin Singleton
; Date: 7 June 2019
; Description: Demonstrates understanding of
; functions by formatting statement.
;===========================================
*/
// header
const header = require('./singleton-header.js');
console.log(header.display("Justin", "Singleton", "Functions 2.4"));
// function for name
function full_name(first, last){
  return first + last;
}
// function for date
function date_writer(year, month, day){
  return new Date(year, month, day);
}
// function for temperature
function format_number(number, fixedPosition){
  return number.toFixed(fixedPosition);
}
// function for age
function convert_to_int(string){
  return string = parseInt(string);
}
// function for savings goal
function convert_to_float(string){
  return string = parseFloat(string);
}
// statement in its entirety
console.log("Hello my name is " + full_name("Justin", " Singleton") + "!\n");

console.log("Today's date is " + date_writer(2019, 06, 07) + " and the current temperature is "
+ format_number(70.23, 1) + ", I am " + convert_to_int("23") + " years old, and my savings account goal is "
+ convert_to_float("1000000") + " dollars.");
