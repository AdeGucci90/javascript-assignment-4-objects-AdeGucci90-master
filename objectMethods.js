/**
 * Create an object called person with the following properties:
 *
 * firstName - String
 * lastName - String
 * age - Number
 * city - String
 * skills - Array
 * isMarried - Boolean
 * fullName - Function
 *
 * The fullName function should return the full name of the person.
 * The fullName function should be a method of the person object.
 */

// Write your code here

var person = {
    firstName: "Victor",
    lastName: "Adeola",
    age: 30,
    city: "Lagos",
    skills: ["JavaScript", "HTML", "CSS"],
    isMarried: false,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

// End of your code

// Do not modify code below this line.
// --------------------------------
