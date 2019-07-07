/*
============================================
 Title:  Discussion Board-6.1.js
 Author: Wendy Portillo
 Modified By: Justin Singleton
 Date:   July 7, 2019
 Description: Objects and Built-In Objects
 CORRECTED
===========================================
*/


// Start program
// Array like object containing composers
var composers = [
	{
    firstName: "Ludwig",
    lastName: "van Beethoven",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Johann",
    lastName: "Sebastian Bach",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Richard",
    lastName: "Wagner ",
    genre: "Classic",
    rating: "10"
  },                       // added bracket instead of , to close out object //
  {
    firstName: "Wolfgang",
    lastName: "Amadeus Mozart",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Johannes",
    lastName: "Brahms",
    genre: "Classic",
    rating: 10             // deleted ' after 10 //
  }
]
composers.forEach(function(composer){
  console.log(composer)
})
                           // added / / to the line below to make it a comment //
//www.tutorialspoint.com/javascript/javascript_objects.htm//
var book = new Object()   // Create the object
         book.subject = "Perl";     // Assign properties to the object
         book.author  = "Mohtashim";
