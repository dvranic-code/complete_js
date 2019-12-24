// // Execution context object
// //  Veriable Object (VO)
// //  Scope chain
// //  "This" variable

// // Lecture: Hoisting => takeaway: we can use functions before declaration

// // functions
// calcAge(1983);

// //declaration
// function calcAge(year) {
//     console.log(2019-year);
// }

// calcAge(1978);

// // don't work
// // retirement(1983); 

// // expresion
// var retirement = function(year) {
//     console.log(65-(2019 -year));
// }

// retirement(1983);



// // variables

// console.log(age); //undefinde
// var age = 23;
// console.log(age);

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);


// // Lecture: Scope and scope chain
// //  Each new function creates a scope
// //  Lexical scoping: a funcion that is inside a function has access to parent scope

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b +c);
//     }
// }

// //other example different execution context
// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third();
//     }
// }

// function third() {
//     var d = "John";
//     // console.log(a + b + c + d);
//     console.log(a + d);
// }

// "This" keyword
//  Regular function call: "this" points at the global object (window object in the browser)
//  Method call: "this" points to the object that is calling the method
//  The "this" keyword is not assigned a value until a function where it is defined is actually called

// console.log(this); window object

calcAge(1983);

function calcAge(year) {
    console.log(2019 - year);
    console.log(this);
}


var john = {
    name: "John",
    yearOfBirth: 1983,
    calcAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();*/
    }
};

john.calcAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1984,
};

//borow a method
mike.calcAge = john.calcAge;

mike.calcAge();

