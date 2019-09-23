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
