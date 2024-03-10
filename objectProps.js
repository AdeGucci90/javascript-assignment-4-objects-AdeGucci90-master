/**
 * Write a JavaScript function that:
 *
 * Takes in an object as an argument.
 * Deletes any properties whose values are not strings.
 * Adds a property called length and sets its value to the new length of the object.
 * Tranforms the object property names to uppercase.
 *
 * The name of your function must be objectProps.
 * The function must take 1 argument corresponding to the object to be transformed: obj.
 * The function must return the transformed object.
 */

// Write your code here

function objectProps(obj) {
    // Iterate through the properties of the object
    for (var key in obj) {
        // Check if the property value is not a string
        if (typeof obj[key] !== 'string') {
            // Delete the property if its value is not a string
            delete obj[key];
        } else {
            // Transform the property name to uppercase
            var uppercaseKey = key.toUpperCase();
            // Check if the property name is already in uppercase
            if (key !== uppercaseKey) {
                // Add the property with the uppercase name
                obj[uppercaseKey] = obj[key];
                // Delete the original property
                delete obj[key];
            }
        }
    }
    // Add a property called length and set its value to the new length of the object
    obj.length = Object.keys(obj).length;
    // Return the transformed object
    return obj;
}

var obj = {
    name: "John",
    age: 33,
    city: "Nairobi",
    skills: ["Phyton", "HTML", "C++"],
    isMarried: true
};

console.log(objectProps(obj));

// End of your code


// Do not modify code below this line.
// --------------------------------
