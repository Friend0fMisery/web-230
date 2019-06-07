/*
============================================
; Title:  header.js
; Author: Justin Singleton
; Date:   25 June 2017
; Modified By: N/A
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US')

	return output
}
