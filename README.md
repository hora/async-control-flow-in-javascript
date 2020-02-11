# W2D2 - Asynchronous Control Flow

## Example from lecture this morning

To see the examples we coded this morning, look in the [/parts](/parts)
directory in this repo. Look for files ending in `.js` for the code.

## Recap - Functions and Callbacks

### What are functions?

- usually named blocks of code that serve a purpose
- can take in input (arguments) and return output
- breaks a bigger problem into smaller problems

### Why are JavaScript functions 'first-class functions'?

- pass them as arguments to other functions
- JS functions are technically objects

### What are callback functions (or callbacks)?

- function passed in as an argument, used to produce the next step? return a
  result?

```js
// the function passed to forEach is a callback
[1, 2, 3].forEach(function(num) {
    console.log(num);
});

const doubles = [];

[1, 2, 3].forEach(function(num) {
    doubles.push(num * 2);
});

// .map will do the same thing as the code just above
const doubles = [1, 2, 3].map(function(num) {
    return num * 2;
});

// we also can give names to our functions,
// then pass them as callbacks
const doubleNum = function(x) {
    return x * 2;
}

// note that we pass doubleNum as a reference to .map (we don't call it)
let doubles = [1, 2, 3].map(doubleNum);
```

- examples we've seen:

    - [Array.prototpye.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

    - [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)


## Synchronous JavaScript

- Until today, we've been working with synchronous JS.
  This means our code gets executed in order, in a 'single
  thread.'

- We looked at an example of ordering food at a
  restaurant. Preparing the food synchronously means
  someone might have to wait a really long time to get
  their order.

- In such a case, the execution is **blocked** until the
  computation is completed. To users, it may look like the
  program is **hanging** and unresponsive.

- One possible solution to this problem is to use
  asynchronous code instead.

## Asynchronous JavaScript

- Async code is code that does not execute immediately,
  but at some specified later time or when a particular
  event is triggered.

### `setTimeout`

- `setTimeout` runs a function after a set amount of time
  has passed.

```js
// Syntax
// delay is specified in milliseconds (1 second = 1000 ms)

const timeoutID = setTimeout(callback, delay[, ...args]);

// Example

setTimeout(function(){
   console.log('Five seconds later...');
}, 5000);
```

See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) for more details.

## Async code and scope

- Scope is a bit trickier when working with async code (see the examples in
  [/parts](/parts))

## Events

- Events are actions or occurrences that happen in the
  system you are programming, which the system tells you
  about so you can respond to them as needed.

- The system will give a signal when an event occurs, so
  that the appropriate response (that is, a callback
  function) is taken.

- As we're programming, we have no way of knowing when
  events will occur – working with events is therefore
  working with _asynchronous_ code.

- An **Event Handler** is a callback function that will be
  called when an event is triggered.

## `process.stdin` and `process.stdout`

- `process.stdin` and `process.stdout` are two features of
  Node.js we can use to read user input from the 'standard
  input source' and to provide output to the 'standard
  output source.'

- In our case, both `stdin` and `stdout` are the console.

### `stdin.on`

- `stdin.on` is a function that takes an event and a
  callback as arguments. When the event is triggered, the
  callback is invoked.

```js
// Syntax

process.stdin.on(event, callback);

// Example

process.stdin.on('data', function() {
   console.log('Received data from stdin.');
});
```

### `stdout.write`

- `stdout.write` is a function that writes to the console.
  Note that it does not write a 'new line' (`'`n`'`), but
  that we have to do that ourselves (if we wish to).

```js
// Syntax

process.stdout.write(string);

// Example

process.stdout.write('Hello, world!\n');
```

## References and further reading

- [Dominic Tremblay's W2D2 lecture
  notes](https://github.com/DominicTremblay/w2d2-lecture-aug19)

- [Nima Boscarino's W2D2 lecture
  notes](https://github.com/NimaBoscarino/async-notes)

- [Event loop visualization tool](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIkNsYXAhIik7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygiQ2xhcCBjbGFwISIpOwp9LCA1MDAwKTsK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

- [Philip Roberts: What the heck is the event loop
  anyway?](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)


