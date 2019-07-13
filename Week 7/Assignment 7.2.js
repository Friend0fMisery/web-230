/*
============================================
; Title: Assignment 7.2
; Author: Justin Singleton
; Date: 13 July 2019
; Description: This program demonstrates the
; use of Constructor Functions.
;===========================================
*/

const header = require('./singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 7.2"));

function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

var employees = [
  new employee("js1", "John", "Smith", "Cashier"),
  new employee("sr2", "Sarah", "Roberts", "Inventory"),
  new employee("js2", "Jerry", "Seinfeld", "Greeter"),
  new employee("cb1", "Christian", "Bale", "Deli"),
  new employee("js3", "Justin", "Singleton", "Manager")
]

let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(index, employees[x].id, employees[x].firstName, employees[x].lastName, employees[x].title);
  index++
}
