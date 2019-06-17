/*
 Title: Discussion Board 3.1
 Author: Tania Rascia (www.digitalocean.com)
 Date: 12 June 2019
 Modified By: Wendy Portillo
 Description: How to Write Conditional Statements in JavaScript.
 We have an account balance of 500, and want to buy a pair of jeans
 for 40. Using the less than or equal to operator, we can check if
 the price of jeans is less than or equal to the amount of funds we have.
 Since jeans <= balance evaluates to true, the condition will pass and the
 block of code will run. But before it will run, you will need to correct
 three errors.
 */


// Set balance and price of item
// Set balance and price of item
const balance = 500
const phone = 600

// Check if there is enough funds to purchase item
if (phone <= balance) {
    console.log("You have enough money to purchase the item!");
} else {
    console.log("You do not have enough money in your account to purchase this item.");
}
// !UNCAPITALIZED IF AND ELSE IN STATEMENT ABOVE!
/*Output
You do not have enough money in your account to purchase this item. */


/*
Below we will create a simple set of if, else, and else if statements, and test them against a given grade.
Now we can write that as a switch statement. Since we're checking a range, we will perform the operation in each
case to check if each expression is evaluating to true then break out of the statement once the requirements for
true have been satisfied.
*/


// Set the current grade of the student
let grade = 87;

// Check if grade is an A, B, C, D, or F
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}
// !UNCAPITALIZED ALL ELSE'S IN STATEMENTS ABOVE!
/* Output
B
*/
