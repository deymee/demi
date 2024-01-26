/********************************************************************************** 
 * WEB700 – Assignment 1
 * * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * * No part of this assignment has been copied manually or electronically from any other source
 * * (including web sites) or distributed to other students.
 * ** Name:Oluwademilade Jeleel Salami Student ID:125970228 Date: 19-01-24
 * *********************************************************************************/

console.log('WEB700 - HttpRequest Simulator');

'use strict';

// Predefined arrays
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Oluwademilade Salami",
    "[Oluwademilade]: [ojsalami@myseneca.ca]",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// The httpRequest function
function httpRequest(httpVerb, path) {
    for (var i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manual Testing
console.log(httpRequest("GET", "/")); // Should return "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // Should return "200: This assignment was prepared by Oluwademilade Salami"
console.log(httpRequest("PUT", "/")); // shows "404: Unable to process PUT request for /"

// Utility function to generate random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// Function to automate tests
function automateTests() {
    var testVerbs = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/invalid", "/test"];

    function randomRequest() {
        var randomVerb = testVerbs[getRandomInt(testVerbs.length)];
        var randomPath = testPaths[getRandomInt(testPaths.length)];
        var response = httpRequest(randomVerb, randomPath);
        console.log(`Request: ${randomVerb} ${randomPath} - Response: ${response}`);
    }

    var testInterval = setInterval(randomRequest, 1000); // Calls randomRequest every second
}

// Running automated tests
automateTests();