// activity: 1 If-else statements
 
// task : 1 to check if a number is positive ,negative or zero and log the result to the console
const number = 6

if(number > 0){
    console.log("number is positive:",number);
}
else if(number < 0){
    console.log("number is negative:",number);
}
else {
    console.log("number is zero:", number);
}

// task 2: to check if a person is eligible to vote (age >= 18) and log the result

const age = 78
if (age >=18){
    console.log("your are eligible for vote:",age);
}
else{
    console.log("Your are not eligible for vote.");
}

// Activity 2 :Nested if-else statement 

// task 3 : to find the largest of three numbers using nested if-else statements

let num1 = 4
let num2 = 6
let num3 = 9
let largest;

if(num1 > num2){
    if(num1 > num3){
        largest = num1

    }
    else{
       largest = num3
    }
}
else{
    if(num2 > num3){
        largest = num2
    }
    else {
       largest = num3
    }
}
console.log("the largest number:",largest);

// Activity 3 : switch case

// task 4 : a switch case to determine the day of the week based on an number (1-7) and log 
let numberday = 3 // put the number of the day

let dayName;

switch(numberday){
    case 1:
        dayName = "sunday"
        break
    case 2:
        dayName = "Monday"
        break
    case 3:
        dayName = "Tuesday"
        break

    case 4:
        dayName ="wednesday"
        break

    case 5:
        dayName = "thursday"
        break

    case 6:
        dayName = "friday"
        break
    case 7:
        dayName = "Saturday"
        break
    default:
        dayName = "Invalid numbers"
}
console.log("The day of the week is :", dayName);


// task 5 : a switch case to assign a grade("A","B","C","D","F") based on a score and log result

let score = 56

let grade

switch(true){
    case (score >= 90 && score <100):
        grade = "A+"
        break
    case (score >= 80 && score <100):
        grade = "A"
        break
    case (score >= 70 && score <100):
        grade = "B+"
        break
    case (score >= 60 && score <100):
        grade = "B"
        break
    case (score >= 50 && score <100):
        grade = "C+"
        break
    case (score >= 40 && score <100):
        grade = "C"
        break
    case (score < 40 && score <100):
        grade = "F"
        break
    default:
        grade:"invalid grade"

}
console.log("Your grade is :", grade);

// Activity 4: Ternary operator

// task 6:ternary operator is used if a number is even or odd and log result

let numberOddEven = 9

let result =(numberOddEven % 2 === 0) ? "even" : "odd"

console.log("the number is :", result);

// activity 5 : Combining  conditions
// task 7 : 