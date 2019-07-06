/*
============================================
; Title: Assignment 6.3
; Author: Justin Singleton
; Date: 6 July 2019
; Description: This program demonstrates the
; use of object literals.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 6.3"));

var ticket={
  id: "HTTP 404",
  name: "Singleton Support",
  requestor: "Bob Dylan",
}

console.log("\n" + "{id: " + ticket.id + ", name: " + ticket.name + ", requestor: " + ticket.requestor + "}")
