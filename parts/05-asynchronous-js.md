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


