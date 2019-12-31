/**
 * Lecture: let and const
 */

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';

// console.log(name5);

// //ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// // name6 = 'Jane Miller';
// console.log(name6);

// // ES5

// function driverLicnece5(passedTest) {

//     console.log(firstName);

//     if (passedTest) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;

//     }

//     console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
// }

// driverLicnece5(true);


// // ES6

// function driverLicnece(passedTest) {

//     // console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;
//     if (passedTest) {
//         firstName = 'John';
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
// }

// driverLicnece(true);

// let i = 23;

// for(let i = 0; i < 5; i++) {
//     console.log(i);
    
// }

// console.log(i);


/**
 * Lecture: Blocks and IIFEs
 */

// {
//     const a = 1;
//     let b = 2;
//     var c =3
    
// }

// // console.log(a + b);
// console.log(c);


/**
 * Lecture: Strings
 */

// let firstName = 'John';
// let lastName = 'Smith';

// const yearOfBirth = 1983;

// function calcAge(year) {
//     return 2019 - year;
// }


// //ES5
// console.log('This is ' + firstName + ' ' + lastName + ' he is born in ' + yearOfBirth + ', and he is ' + calcAge(yearOfBirth) + ' years old.');


// //template literals

// console.log(`This is ${firstName} ${lastName} and he is born in ${yearOfBirth}, he is ${calcAge(yearOfBirth)} years old`);


// const m = `${firstName} ${lastName}`;
// console.log(m.startsWith("Jo"));
// console.log(m.endsWith("th"));
// console.log(m.includes(" S"));
// console.log(`${firstName} `.repeat(10));


/**
 * Lecture: Arrow functions
 * 
 * when we need a callback function
 */

const years = [1983, 1990, 1946, 1958];

//ES5
var ages = years.map(function(year) {
    return 2019 - year;
});

console.log(ages);

//ES6
let age6 = years.map(year => 2019 - year);
console.log(age6);

age6 = years.map((year, index) => `Age element ${index+1}: ${2019 - year}`);
console.log(age6);

age6 = years.map( (year, index) => {
    const now = new Date().getFullYear();
    const age = now - year;
    return `Age ${index + 1}: ${age}`;
} );
console.log(age6);

