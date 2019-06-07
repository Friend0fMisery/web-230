/*
============================================
; Title: Assignment 2.3
; Author: Justin Singleton
; Date: 6 June 2019
; Description: Demonstrates how to define
; and call functions.
============================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Function Properties 2.3"));

function myName() {
    return myName.justin
}
myName.justin = "Justin Singleton";
console.log("Hello " + myName() + "!");
