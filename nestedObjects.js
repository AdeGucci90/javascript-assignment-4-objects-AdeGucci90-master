/**
 * Create a function called nestedObjects that
 * takes in an array as an argument and returns a nested object.
 * The name of your function must be nestedObjects.
 * The function must take 1 argument corresponding
 * to the array to be transformed: arr.
 * The function must return a nested object.
 * For an array of length n, the nested object must have n levels.
 * For an empty array, the function should return null.
 */

// Write your code here

function nestedObjects(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return null;
    }

    // Initialize the nested object
    var nestedObj = {};

    // Define a helper function to recursively create nested objects
    function createNestedObject(obj, depth, index) {
        if (depth === arr.length - 1) {
            obj[arr[index]] = null;
            return;
        }
        obj[arr[index]] = {};
        createNestedObject(obj[arr[index]], depth + 1, index + 1);
    }

    // Create the nested object
    createNestedObject(nestedObj, 0, 0);

    return nestedObj;
}

// Example usage:
console.log(nestedObjects(['a', 'b', 'c'])); 
// Output: { a: { b: { c: null } } }

console.log(nestedObjects([])); 
// Output: null


// End of your code

// Do not modify code below this line.
// --------------------------------
