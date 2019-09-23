console.log('Before calling setTimeout.');

setTimeout(function() {
    console.log('Inside the call to setTimeout');
}, 1000);

// what if delay was 0?

console.log('After calling setTimeout.');

