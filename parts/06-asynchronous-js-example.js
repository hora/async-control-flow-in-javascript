const prepareFood = function(food, quantity) {

    // Let's assume it takes 3 seconds to prepare a food item

    console.log(`Preparing ${quantity} ${food}`);

    setTimeout(function() {
        console.log(`Serving ${quantity} ${food}`);
    }, 3000 * quantity);

}

console.log('Hi! Can I take your order?');

console.log('3 pancakes, please');
prepareFood('pancakes', 3);

console.log('1 coffee, please');
prepareFood('coffee', 1);

