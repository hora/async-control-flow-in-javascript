const prepareFood = function(food, quantity) {
    for (let i = 0; i < quantity; i++) {
        //console.log(`Preparing ${food}.`);
        console.log(` `);
    }

    console.log(`Serving ${quantity} ${food}`);
}

console.log('Hi! Can I take your order?');

console.log('2 pancakes, please');
prepareFood('pancakes', 200000);

console.log('1 coffee, please');
prepareFood('coffee', 1);

