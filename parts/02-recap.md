## Recap - Functions and Callbacks

### What are functions?

- blocks of code that serve a specific purpose

- all functions are objects

- can optionally return one structure at a time (ex: a
  Number, a String, an Array, etc)

- ideally they serve a single purpose

- can have side-effects: changes some part of program
  state directly

- functions can have names or they can be anonymous

- functions can have parameters / arguments

### Why are JavaScript functions 'first-class functions'?

- functions in JS are objects

- can be passed as arguments to other functions

- can be returned by other functions

- can be the property of an object

- can have properties

### What are 'higher order' functions?

- a function that takes another function as a parameter
  and / or returns one

### What are callback functions (or callbacks)?

- a callback is a function F1 that is passed to another
  function F2, and that F2 'calls back' as a result of its
  operations

- examples we've seen:

    - [Array.prototpye.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

    - [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```js
const foundWaldo = function() {
    console.log('we found waldo!');
}

const lookForWaldo = function(people, foundAction) {
    for (let person of people) {
        if (person === 'waldo') {
            foundAction();
        }
    }
}

lookForWaldo(['alice', 'bob', 'waldo', 'suzie'], foundWaldo);
```








