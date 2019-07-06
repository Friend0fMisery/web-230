/*
============================================
; Title: Assignment 6.4
; Author: Justin Singleton
; Date: 6 July 2019
; Description: This program demonstrates the
; use of nested object literals.
;===========================================
*/

const header = require('./singleton-header.js');

console.log(header.display("Justin", "Singleton", "Assignment 6.4"));

var ticket={
  id: "HTTP 404",
  name: "Singleton Support",
  dateCreated: new Date(),
  priority: 1,
  personID: "bdylan69",
  person: {
    id: "bdylan69",
     firstName: "Bob",
     lastName: "Dylan",
     jobTitle: "musician",
  }
}

console.log("");
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated +
" and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (Programmer I).")
