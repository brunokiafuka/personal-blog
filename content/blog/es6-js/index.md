---
path: "/javascript-es6"
date: 2020-02-03
title: "Javascript ES6"
tags: ["beginners", "javascript", "es6"]
---

**Javascript** is a programming language that has gained its popularity by allowing web pages to be more interactive. But as time went by, this language gained new features so that it was not limited to creating animations but also creating programs that work on servers.

In 2015, the language underwent a "super" evolution with the approval of **ECMAScript6 (also known as ES6)**, ES6 brought new features to Javascript, making development with more intuitive javascript. In this post I will present some of these new features:

> **TL;DR**

##### 1. Const e Let

We are used to using `var` when declaring our variables in Javacript, we use this ** keyword ** to define mutable and constant variables.

- **const**: we use const for variables that are not changeable during the execution of our script.

```javascript
// For example, the PI value is not changeable.
const PI = 3.14
```

- **let**: unlike `const`,`let` allows us to have variables that can have their values changed.

```javascript
let buz = 'buzz'
...
buzz = 'feed'
```

> When iterating through a repetition cycle, we should always use `let` instead of`const`.

##### 2. Template Strings

The **template strings**, help us to build our strings in a more semantic way. The use of template strings answers the problem of string manipulation, avoiding the use of contacting and generating more intuitive strings.

```javascrip
// Basic creation of a literal string
`JavaScript '\n' is nice 🚀.`

// String with multiple lines
`This is not
  cool in JavaScript.`

// String interpolation
const name = "Bruno", time = "toda";
`Hi ${name}, how are you ${time}?`

```

##### 3. Arrow Functions

**Arrow functions** (also known as fat arrow functions), is one of the most popular features of ES6. The arrow functions allow us to write functions in a less verbose way.

Previously the functions were written as follows:

```javascript
const multiplyNumByTwo = function(params) {
  return params * 2
}

multiplyNumByTwo(4) // 8
```

With the introduction of arrow functions the same function can be written as follows:

```javascript
const multiplyNumByTwo = params => {
  return params * 2
}

multiplyNumByTwo(4) // 8
```

> It gets shorter! If the function has only one statement and the statement returns a value, you can remove the brackets and the keyword **return**:

```javascript
const multiplyNumByTwo = params => params * 2

multiplyNumByTwo(4) // 8
```

##### 4. Spread Operator

This is personally one of my favorite features! - The **spread operators** are 3 points `...` followed by a vector (or some iterable element, such as objects) and expand the vector into individual elements. We can use spread operators in the following cases:

```javascript
// Add elements to an existing vector
const lettersToAdd = ["C", "D"]
const letters = ["A", "B", ...lettersToAdd, "E", "F"]
console.log(letters) // ["A", "B", "C", "D", "E", "F"]

// Pass elements of a vector as arguments of a function
const sumAll = (x, y, z) => console.log(x + y + z)
const params = [1, 2, 3]
sumAll(...params) // 6

// Join Arrays
let arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]
arr1 = [...arr1, ...arr2]
console.log(arr1) // [0, 1, 2, 3, 4, 5]
```

##### 5. Object Destructuring

**Object Destructuring** is another super feature provided by ES6, which makes object manipulation much more intuitive in javascript. Previously to iterate an object used to be a tedious process, as in the example below:

```javascript
const person = { name: "Bruno", age: 23, superPower: "writing code" }

const name = person.name
const age = person.age
const superPower = person.superPower

console.log(name) // "Bruno"
console.log(age) // 23
console.log(superPower) // "Writing code"
```

As we can see the example above is very verbose, using the concept of object destructuring, we can have a simpler example:

```javascript
const person = { name: "Bruno", age: 23, superPower: "writing code" }

const { name, age, superPower } = person

console.log(name) // "Bruno"
console.log(age) // 23
console.log(superPower) // "Writing code"
```

In addition to these five (5) features listed on this post, ES6 has many others like:

- Default Parameters
- Rest Parameters
- Promises
- Classes
- Import and export
- For Of Comprehensions
- E outras...

> **#CodingIsFun🚀**
