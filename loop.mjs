///********************* day -4 : Loops********* */

// Activity 1: For Loop
//******Task 1: wap to print numbers from 1 to  10******/

for(let i= 1;i <= 10; i++){
    console.log("numbers: ",i);
}
// result
//numbers:  1
/****numbers:  2
numbers:  3
numbers:  4
numbers:  5
numbers:  6
numbers:  7
numbers:  8
numbers:  9
numbers:  10 ****/

///************task 2:wap to print multiplication table of 5 */
const number = 5
// for(let j = 1; j <= 10; j++){
//     console.log(`${number} * ${j} = ${number * j}`);
// }

// another way using two for loop

// Outer loop to iterate over the range 1 to 10
for (let i = 1; i <= 10; i++) {
    // Inner loop to perform the multiplication for the number 5
    for (let j = 5; j <= 5; j++) {
        console.log(`${j} * ${i} = ${j * i}`);
    }
}

/* 
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

/***************Activity 2 : While loop */

/***********Task 3:wap to calculate the sum of numbers from 1 to 10 using a while loop */
let sum = 0
let k = 1
while(k <=10){
    sum += k
    k++;
}
console.log("sum: ", sum); //result 55


//*******************task 4: wap to print numbers from 10 to 1 using while loop */


let l = 10
while (l >= 1) {
    console.log(l);
    l--;
    
}
console.log("task 5: dowhile loop");

///********************Activity 3: Do ... while loop */

///****task5: wap to print numbers from 1 to 5 using do while loop */
let m = 1
do {
    console.log(m);
    m++
}
while(m <= 5)


///***********task 6: wap to calculate the factorial of a number using do ... while loop */

const numberForFactorial = 5
let factorial = 1
let n = numberForFactorial

do {
    factorial *= n
    n--
}
while (n > 0)

    console.log(`factorial of ${numberForFactorial} is ${factorial}`);
//**************Activity 4 : Nested loops************* */


//**************Task 7:wap to print a pattern using nested for loops********** */


for(let o=1;o<=4;o++){
    let row = ""
    for(let p = 1;p<= o;p++){
        row += "* "
        
    }
    console.log(row.trim());
}

/**
 patarn like this:
*
* *
* * *
* * * *

 */
//**************Activity 5: Loop Control Statements**************** */

//*******************Task 8:wap to print numbers from 1 to  10 but skip the number 5 using the continue statement ******************** */


for  (let q = 1; q <= 10; q++){
    if(q === 5){
        continue
    }
    console.log(q);
}
/****
 
  result:
1
2
3
4
6
7
8
9
10

 */
////***************Task 9: wap to print numbers from 1 to 10 ,but stop the loop when the number is 7 using the break statements*********************** */

console.log("this is task 9");
for (let r = 1;r<=10;r++){
    if(r === 7){
        break
    }
    console.log(r);
}
