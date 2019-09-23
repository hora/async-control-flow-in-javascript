// Assuming it takes 3 seconds (3000ms) to prepare one
// item.

const prepareFood = function(food, quantity) {

   // syntax: setTimeout(callback, delay)

    setTimeout(function() {
        console.log(`Serving ${quantity} orders of ${food}.`);
    }, 3000 * quantity)
    
};

console.log('Welcome to Lighthouse Cafe!');

console.log('Two pancakes, please.')
prepareFood('pancakes', 2);

console.log('Can I get a soup?');
prepareFood('soup', 1);


