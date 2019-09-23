const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603];

const mysteryFunction = function(nums) {
    for (const num of nums) {
        setTimeout(function() {
            console.log(num);
        }, num);
    }
};

mysteryFunction(numbers);

