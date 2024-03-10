/**
 * Write a JavaScript function that takes in a string and returns an object
 * containing the histogram of the letters and numbers in the string.
 * The name of your function must be histogram.
 * The function must take 1 argument corresponding to
 * the string to be analyzed: str.
 * The function must return an object containing the histogram of the
 * letters and numbers in the string.
 * The function must ignore spaces, punctuation, and special characters.
 * The function must count uppercase and lowercase letters as the same letter.
 * The function should be able to handle an empty string i.e., return {}.
 */

// Write your code here

function histogram(str) {
    // Initialize an empty object to store the histogram
    var hist = {};

    // Remove spaces, punctuation, and special characters, and convert to lowercase
    var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Iterate through each character in the cleaned string
    for (var i = 0; i < cleanStr.length; i++) {
        var char = cleanStr[i];
        // Increment the count of the character in the histogram object
        hist[char] = (hist[char] || 0) + 1;
    }

    // Return the histogram object
    return hist;
}

console.log(histogram("Hello, World!")); 
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

console.log(histogram("abc 123 DEF")); 
// Output: { a: 1, b: 1, c: 1, 1: 1, 2: 1, 3: 1, d: 1, e: 1, f: 1 }


// End of your code

// Do not modify code below this line.
// --------------------------------
