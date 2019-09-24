let number = 1;
console.log(`Before calling setTimeout: ${number}`);

setTimeout(function() {
    number = 2;
    console.log(`Inside call to setTimeout: ${number}`);
}, 0);

console.log(`After calling setTimeout: ${number}`);

setTimeout(function() {
    console.log(`Inside 2nd call to setTimeout: ${number}`);
}, 2000);

