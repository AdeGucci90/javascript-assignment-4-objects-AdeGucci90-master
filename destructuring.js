/**
 * Write a JavaScript function that takes in an object and
 * returns an array containing the values of the object.
 * The name of your function must be destructuring.
 * The function must take 1 argument corresponding to
 * the object to be destructured: obj.
 * The function must return an array containing
 * the values of the name and city properties of the object.
 * If the name or city property does not exist,
 * the value of the property in the array should default to null.
 */

// Write your code here
function destructuring(obj) {
    // Destructure the object
    const { name = null, city = null, country = null} = obj;

    // Return an array containing the values of name and city properties
    return [name, city, country];
}

const person1 = { name: 'John', city: 'New York' };
const person2 = { name: 'Alice' };
const person3 = { city: 'Paris', country: 'France'};

console.log(destructuring(person1));
console.log(destructuring(person2));
console.log(destructuring(person3));

// End of your code

// Do not modify code below this line.
// --------------------------------
