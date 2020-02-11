## Recap - Functions and Callbacks

### What are functions?

- usually named blocks of code that serve a purpose
- can take in input (arguments) and return output
- breaks a bigger problem into smaller problems

### Why are JavaScript functions 'first-class functions'?

- can be assigned to any type of value
- pass them as arguments to other functions
- JS functions are technically objects

const doSomething = function() {
    // ...
}

doSomething();
doSomething.doSomeOtherThing = function() {
    // ...
}

doSomething.doSomeOtherThing();

### What are callback functions (or callbacks)?

- function passed in as an argument, used to produce the next step? return a
  result?

[1, 2, 3].forEach(function(num) {
    console.log(num);
});

const doubles = [];

[1, 2, 3].forEach(function(num) {
    doubles.push(num * 2);
});

const doubles = [1, 2, 3].map(function(num) {
    return num * 2;
});

const doubleNum = function(x) {
    return x * 2;
}

let doubles = [1, 2, 3].map(doubleNum);





















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








