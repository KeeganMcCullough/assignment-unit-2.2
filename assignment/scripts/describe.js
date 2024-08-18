// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to a string 'Dane'.
// We check name; if it's a string 'Mary', we console. log 'Hi, Mary!'
// Otherwise, we console log 'How do you do?'
// name is === 'Dane' right now, so we enter the else.
// We console log 'How do you do?'
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare an empty variable secret
// We declare a variable code and set it to the number 123
// We check if code === 123, and if it does, we set secret to 'super', and then double code
// code does === 123, so we set secret to 'super' and double code, making it === 246
//we then check if code is greater than 250, and if it is, we set secret to 'duper'
//code is 246, which is less than 250. We pass the if statement.
// we console.log secret, which is 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we declare a boolean isStudent and set it to true
// we declare a variable age and set it to the number 34
// we declare a variable zip and set it to the number 55407
//we check if isStudent is a boolean with value true , and if  zip is greater than 80,000
//if so, we console log `You're a student on the West Coast!`
//if not, we then check if isStudent is a boolean with value false, or if  age < 30
//if so, we console log 'What are your hobbies'
//if not, we then check if isStudent is a boolean with value true
//if so, we console log 'Welcome to Prime!'
//if not, we console log 'How about the weather?'
//we are a student, but our zip code is < 80000 and our age is > 30, so we pass to the second else if, and console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';

//FIX - colorOne and colorTwo are improperly initialized. 
//should be let colorOne = 'blue', and let colorTwo = 'red'

let mix = true;

if (mix === true) {
  colorOne = 'purple';

  //FIX - colorTwo is not set to purple.
  //Should be colorOne = 'purple'; colorTwo = 'purple';

}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {

//FIX - wrong comparison symbol is used.
//should be if(temp > 39 && time >= 4)

  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');

  //FIX - this code gives no entry to people >= to 21, and lets in under 21. It also doesn't match the description's style.
  //should be if(age >= minAge){
                console.log('enter');
              } else {
               console.log('no entry');
              }
  //if i have my logic correct, this properly allows people above or = to the minimum age in, and denies entry to those under the min age
} else {
  console.log('enter');
}
*/

