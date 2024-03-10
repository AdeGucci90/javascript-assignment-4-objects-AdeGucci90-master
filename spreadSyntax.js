/**
 * Write a JavaScript function that takes in two objects
 * and destructures them into one object.
 * The name of your function must be spreadSyntax.
 * The function must take 2 arguments corresponding to
 * the objects to be enumerated: obj1 and obj2.
 * The function must return an object containing
 * the enumerated properties of obj1 and obj2.
 * If the same property exists in both objects,
 * the value of the property in obj2 should be used.
 */

// Write your code here
function spreadSyntax(obj1, obj2) {
    // Combine properties of both objects
    var combinedObject = { ...obj1, ...obj2 };
    return combinedObject;
}

// Example usage:
var obj1 = {
    name: "Irene",
    age: 28
};

var obj2 = {
    city: "Accra",
    skills: ["SQL", "MongoDB", "C++"],
    age: 35 // This property will overwrite the same property from obj1
};

console.log(spreadSyntax(obj1, obj2));

// End of your code

// Do not modify code below this line.
// --------------------------------
