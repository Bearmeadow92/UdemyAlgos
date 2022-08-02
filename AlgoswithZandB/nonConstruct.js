// Given an Array of positive integers representing the values of coins in your possession, write a function that returns
// the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any 
// positive integer value and aren't necessarily unique (i.e. you can have multiple coins of the same value).

// For example, if your given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If
// you're given no coins, the minimum amount of change that you can't create is 1.


// Inputs - array of positive integers
// Output - positive integer
// Constraints - has to be positive
// Edge Cases - Empty array => return 1


function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

let result = 0;

for (i = 0; i <coins.length; i++){
    if (coins[i] > result + 1){
        return result + 1
    }

    result = result + coins[i];
}

return result + 1;


//------------refactored solution------------//


    // let currentChangeCreated = 0;
    // for (const coin of coins) {
    //     if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;

    //     currentChangeCreated += coin;
    // }

    // return currentChangeCreated + 1;


//------------refactored solution------------//


}

console.log(nonConstructibleChange([1,2,5]))