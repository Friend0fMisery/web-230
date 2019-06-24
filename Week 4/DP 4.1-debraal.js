/*
===========================================================
Title: Secret Message
Author: Rita DeBraal
Date: 23 June 2019
Modified By: Justin Singleton
Description: Convert an array to a secret message that starts
             with 'Programming is not...' CORRECTED
============================================================
*/

// The array to be manipulated
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
                     'easily', 'the', 'first', 'time,', 'it', 'is', 'about',
                     'what', 'you', 'can', 'figure', 'out.', '-2015,',
                     'Chris', 'Pine,', 'Learn', 'JavaScript']; //added ]; to close array//

secretMessage.pop() // Removes the last array element
secretMessage.push('to', 'Program') // Adds to the end of the array
secretMessage[7] = 'right' // Changes the word easily to right // changed 2 to 7 to pop 'easily' //
secretMessage.shift() // Removes the first string in array
secretMessage.unshift('Programming') // Adds to the array as the first element
/*
Removes get, right, the, first, time
with know,
*/
secretMessage.splice(6, 2, 'know,')
console.log(secretMessage.join())// Joins the message with no commas
