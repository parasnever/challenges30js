/***************Day 5:Functions *************** */

/*********************Activity 1: Function Declaration   ********************* */

/*********************Task 1: wap to check if a number is even or odd and log the result    ********************* */


function checkEvenOdd(number){
    if(number % 2 === 0){
        console.log(number + " is even.");
    }else{
        console.log(number + ' is odd.');
    }
}
checkEvenOdd(4) // Output: 4 is even.
checkEvenOdd(7)  // Output: 7 is odd.

/***************Task 2:wap to calculate the square of number and log the result ******************* */

function square(number){
    return number * number
}
console.log("square of number: ",square(3)); // output: 9
console.log("square number is:",square(8));// output: 64

/*****************Activity 2 : function expression*********************** */

/****************Task 3:wap to find maximum of two numbers and log the result********************* */
