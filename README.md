# JavaScript Objects

## 📅 Due Date

Click the icon above to view the assignment due date.

## 🎯 Objectives

The goal of this assignment is to demonstrate your understanding of basic JavaScript concepts such as objects and methods.

## 👩‍💻 Getting Started

To get started with this assignment, you will need to clone this repository to your local machine and open the folder using VS Code:

```bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
code .
```

## ✅ Tasks

Please **_do not edit any other file_** except those specified here.
The assignment tasks are as follows:

#### **1. Object Properties**

-   In the `objectProps.js` file, write a JavaScript function that:

    -   Takes in an object as an argument.
    -   Deletes any properties whose values are not strings.
    -   Adds a property called `length` and sets its value to the new length of the object.
    -   Tranforms the object property names to uppercase.

-   The name of your function must be `objectProps`.
-   The function must take 1 argument corresponding to the object to be transformed: `obj`.
-   The function must `return` the transformed object.
-   Here is an example of the expected output when `console.log(objectProps({ name: "John", age: 30, city: "New York" }))` is called:

```bash
{
  NAME: 'John',
  CITY: 'New York',
  LENGTH: 2
}
```

-   **_Hint:_** Look up the [toUpperCase method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase).
-   **_Hint:_** Look up the [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).
-   **_Hint:_** Look up the [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete).
-   **_Hint:_** Look up the [for...in statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

#### **2. Object Methods**

-   In the `objectMethods.js` file, create an object called `person` with the following properties:

    -   `firstName` - String
    -   `lastName` - String
    -   `age` - Number
    -   `city` - String
    -   `skills` - Array
    -   `isMarried` - Boolean
    -   `fullName` - Function

-   The `fullName` function should return the full name of the person.
-   The `fullName` function should be a method of the `person` object.
-   Here is an example of the expected output when `console.log(person.fullName())` is called:

```bash
My name is John Doe.
```

-   **_Hint:_** Look up the [this keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

#### **3. Nested Objects**

-   In the `nestedObjects.js` file, create a function called `nestedObjects` that takes in an array as an argument and returns a nested object.
-   The name of your function must be `nestedObjects`.
-   The function must take 1 argument corresponding to the array to be transformed: `arr`.
-   The function must `return` a nested object.
-   For an array of length `n`, the nested object must have `n` levels.
-   For an empty array, the function should return `null`.
-   Here is an example of the expected output when `console.log(nestedObjects(["John", "Doe", 30, "New York"]))` is called:

```bash
{
    value: 'John',
    next: {
        value: 'Doe',
        next: {
            value: 30,
            next: {
                value: 'New York',
                next: null
            }
        }
    }
}
```

-   **_Hint:_** Look up [recursion](https://www.freecodecamp.org/news/recursion-in-javascript-1608032c7a1f/).
-   **_Hint:_** Look up [linked lists](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/).
-   **_Hint:_** Look up [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).
-   **_Hint:_** Look up [object references and copying](https://javascript.info/object-copy).

#### **4. Spread Syntax**

-   In the `spreadSyntax.js` file, write a JavaScript function that takes in two objects and enumerates their properties into one object.
-   The name of your function must be `spreadSyntax`.
-   The function must take 2 arguments corresponding to the objects to be enumerated: `obj1` and `obj2`.
-   The function must `return` an object containing the enumerated properties of `obj1` and `obj2`.
-   If the same property exists in both objects, the value of the property in `obj2` should be used.
-   Here is an example of the expected output when `console.log(spreadSyntax({ name: "John", age: 30 }, { city: "New York" }))` is called:

```bash
{
  name: 'John',
  age: 30,
  city: 'New York'
}
```

-   **_Hint:_** Look up [the Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals).

#### **5. Destructuring**

-   In the `destructuring.js` file, write a JavaScript function that takes in an object and returns an array containing the values of the object.
-   The name of your function must be `destructuring`.
-   The function must take 1 argument corresponding to the object to be destructured: `obj`.
-   The function must `return` an array containing the values of the `name` and `city` properties of the object.
-   If the `name` or `city` property does not exist, the value of the property in the array should default to `null`.
-   Here is an example of the expected output when `console.log(destructuring({ name: "John", age: 30, city: "New York" }))` is called:

```bash
[ 'John', 'New York' ]
```

-   Here is an example of the expected output when `console.log(destructuring({ name: "John", age: 30 }))` is called:

```bash
[ 'John', null ]
```

-   Here is an example of the expected output when `console.log(destructuring({ age: 30, city: "New York" }))` is called:

```bash
[ null, 'New York' ]
```

-   Here is an example of the expected output when `console.log(destructuring({ age: 30 }))` is called:

```bash
[ null, null ]
```

-   **_Hint:_** Look up [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring).

#### **6. Histogram**

-   In the `histogram.js` file, write a JavaScript function that takes in a string and returns an object containing the histogram of the letters and numbers in the string.
-   The name of your function must be `histogram`.
-   The function must take 1 argument corresponding to the string to be analyzed: `str`.
-   The function must `return` an object containing the histogram of the letters and numbers in the string.
-   The function must ignore spaces, punctuation, and special characters.
-   The function must count uppercase and lowercase letters as the same letter.
-   The function should be able to handle an empty string i.e., `return {}`.
-   Here is an example of the expected output when `console.log(histogram("Hello World, 123!"))` is called:

```bash
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1,
    1: 1,
    2: 1,
    3: 1
}
```

-   **_Hint:_** Look up [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

### 🧪 Testing your code (Optional)

**_Note: You will need to have [Node](https://nodejs.org/en/download) installed on your PC for this to work_**

You can try to test your code before submitting by following the steps outlined below:

-   Run this command in your terminal to install the relevant packages

```bash
npm install
```

-   Run your tests on a specific file

```bash
./tests.sh objectProps.js
```

-   Remember to type in the file name with the `.js` extension.

## ✍ Submitting Your Assignment

To submit your assignment, you will need to commit and push your changes to the original repository. The commit should include your changes and any additional files or documentation that you think are necessary.

## ☕ Resources

If you need help with any of the concepts covered in this assignment, here are some resources that you might find useful:

-   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [W3Schools](https://www.w3schools.com/js/)
-   [JavaScript.info](https://javascript.info/)

**_🍀Good luck!_**
