/*
============================================
; Title: Assignment 1.5
; Author: Justin Singleton 
; Date: 31 May 2019
; Modified By: N/A
; Description: This program demonstrates the
; types, values, and variables used in 
; javaScript.
;===========================================
*/

//Base Variables
var firstName = "John";
var firstName1 = "Mary";
var firstName2 = "Paul";
var lastName = "Smith";
var lastName1 = "Johnson";
var lastName2 = "Jacobs";
var address = "1 Fun St.";
var address1 = "2 Sad Ave.";
var address2 = "3 Happy Ln.";
var payRate = 10.11;
var payRate1 = 20.22;
var payRate2 = 30.33;
var hireDate = new Date(2001, 0, 1);
var hireDate1 = new Date(2005, 4, 5);
var hireDate2 = new Date(2010, 9, 10);
//changed to one decimal point
var payRate_0 = (payRate.toFixed(1));
var payRate1_0 = (payRate1.toFixed(1));
var payRate2_0 = (payRate2.toFixed(1));
//changed to mm/dd/yyyy format
var hireDate_0 = ((hireDate.getMonth() +1) + "/" + hireDate.getDate() + "/" + hireDate.getFullYear())
var hireDate1_0 = ((hireDate1.getMonth() +1) + "/" + hireDate1.getDate() + "/" + hireDate1.getFullYear())
var hireDate2_0 = ((hireDate2.getMonth() +1) + "/" + hireDate2.getDate() + "/" + hireDate2.getFullYear())
//print values together
console.log(firstName + " " + lastName + " " + payRate_0 + " " + hireDate_0);
console.log(firstName1 + " " + lastName1 + " " + payRate1_0 + " " + hireDate1_0);
console.log(firstName2 + " " + lastName2 + " " + payRate2_0 + " " + hireDate2_0);