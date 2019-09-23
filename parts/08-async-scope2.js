let number = 1;
console.log(`Before calling setTimeout: ${number}`);

setTimeout(function() {
    number = 2;
    console.log(`Inside call to setTimeout: ${number}`);
}, 1000);

console.log(`After calling setTimeout: ${number}`);

