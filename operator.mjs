/*** activity 1 : Arithmetic operations********/ 
// task one: to add two number 

const num1 = 1
const num2 = 2
const sum = num1 + num2
console.log(sum); //result = 3

// task two : to subtract two number 
const num_1 = 6
const num_2 = 3
const sub = num_1 - num_2
console.log(sub);// result = 3


//task three : to multiply two number

const number1 = 4
const number2 = 5
const mul = number1 * number2
console.log(mul); //result = 20


// task four : to divide two number

const number_1 = 6
const number_2 = 3
const div = number_1 / number_2
console.log(div);  // result = 2


// task five : to find remainder 
let  first = 5
let second = 2
const rem = first % second
console.log(rem);


/********** Activity 2 : Assignment operator******** */

// task six : += operator used

first += 4
console.log(first);

// task seven: -= operator used

second -= 1
console.log(second);


/***Activity three: comparison operator */
// task 8: > and < comparison operator

if (num1 > num2){
    console.log("num1 is greater :",num1);
}
else if (num1 < num2){
    console.log("num2 is greter : ",num2);
}


//task 9 : 

if (num1 >= num2){
    console.log("num1 is greater or equal",num1);
}
else if (num1 <= num2){
    console.log("num1 is lesser or equal", num1);

}
// == for the value and === strictly check the data type also

let letter = "1"
let numeric = 1
let comparison = letter ==numeric
console.log("equal vlaue:", comparison); // result = true

let dataComparison = letter === numeric
console.log("strictly check the value:", dataComparison); // result = false


/****Activity -4 Logical operator */

// task 11: && operator is used

const fruit = ""
const favouriteFruit = "apple"
if (fruit && favouriteFruit){
    console.log("and operator value:",fruit);

}
else if (fruit || favouriteFruit){
    console.log("or operator value : ", fruit);
}

let ok = false
if (!ok){
    console.log("print ");
}

//**** Activity 5 :ternary operator */

let ternary = -4
const check = ternary < 0 ? "positive value" : "negative value"
console.log("check the ternary value of number",check);
