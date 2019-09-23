## Recap - Functions and Callbacks

### What are functions?

- separate bits of code

- usually named (ex: `function printName`)

- ideally serve a single purpose (ex: `function add`)

- can optionally take in 'arguments' – these are inputs to
  the function

- can optionally `return` a value – this is the output of
  the function

### Why are JavaScript functions 'first-class functions'?

- because in JS, functions are Objects
    
    - they can be assigned properties

    - they can be assigned to variables

    - they can be passed as arguments or return values

### What are 'higher order' functions?

- higher order functions are functions that take other
  function(s) as parameter(s), or that return another
  function

### What are callback functions (or callbacks)?

- a callback is a function F1 that is passed to another
  F2, and that F2 'calls back' as a result of its
  operations

- examples we've seen:

    - [Array.prototpye.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

    - [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

