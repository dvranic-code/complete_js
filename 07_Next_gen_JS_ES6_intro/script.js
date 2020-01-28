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

// const years = [1983, 1990, 1946, 1958];

// //ES5
// var ages = years.map(function(year) {
//     return 2019 - year;
// });

// console.log(ages);

// //ES6
// let age6 = years.map(year => 2019 - year);
// console.log(age6);

// age6 = years.map((year, index) => `Age element ${index+1}: ${2019 - year}`);
// console.log(age6);

// age6 = years.map( (year, index) => {
//     const now = new Date().getFullYear();
//     const age = now - year;
//     return `Age ${index + 1}: ${age}`;
// } );
// console.log(age6);

/**
 * Lecture: Arrow functions 2
 */

// //ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {

//         var self = this;

//         // document.querySelector('.green').addEventListener('click', function() {
//         //     var str = 'this is box number ' + this.position + ' and it is ' + this.color;
//         //     alert(str);
//         // });

//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'this is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// };

// box5.clickMe();

// //ES6
// // arrow function uses this lexical this key word
// // of it's sarounding

// const box6 = {
//     color: 'blue',
//     position: 2,
//     clickMe: function() {

//         document.querySelector('.blue').addEventListener('click', () => {
//             var str = 'this is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// };

// box6.clickMe();

//ES5
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {

//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friend = ['Bob', 'Dejan', 'Elena'];

// var john = new Person('John');
// john.myFriends5(friend);

// //ES6
// Person.prototype.myFriends6 = function(friends) {

//     const arr = friends.map( el => return `${this.name} is freinds with $
//     {el}`);

//     console.log(arr);
    
// }
// new Person('Tony').myFriends6(friend);