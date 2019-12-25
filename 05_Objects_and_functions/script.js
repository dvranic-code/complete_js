/*
 * OBJECTS
 *
 * Every JS object ha a prototype property, which makes inheritance possible in JS.
 * The prototype property of an object is where we put methods and properties that we want other objects to inherite.
 * The Constructor's prototype property is NOT the prototype of the Constructor itself, but prototype of ALL instances that are created through it.
 * When a certain method (or property) is called, the search starts in the objecty itself, and if it can't be found, the search moves on to the object's prototype. This continues until the method is found: PROTOTYPE CHAIN
 * 
 * 
**/

// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// } // Object literal

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.getName = function () {
//     console.log(this.name + ' is a ' + this.job);   
// }
// Person.prototype.calcAge = function() {
//     console.log( this.name + ' is ' + (2019 - this.yearOfBirth) + ' years old.');   
// }

// var dejan = new Person('Dejan', 1983, 'Web developer');

//  dejan.calcAge();

//  var jane = new Person("Jane", 1871, 'scientiest');
//  jane.calcAge();

//  var mark = new Person('Mark', 1948, 'retired');
//  mark.calcAge();

//  dejan.getName();

 

// Object.create

// var personProto = {
//     calcAge: function() {
//         console.log(2019 - this.yearOfBirth);
        
//     }
// }

// var john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1983;
// john.calcAge();

// var jane = Object.create(personProto,
//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1986 },
//         job: { value: 'designer' }
//     });

// jane.calcAge();



// // Primitives vs Objects
// var a = 26;
// var b = a;

// console.log(a,b);

// a = 46;

// console.log(a, b);


// // Objects
// var ob1= {
//     name: 'John',
//     age: 26
// };

// var ob2 = ob1;

// ob1.age = 29;

// console.log(ob1);
// console.log(ob2);


// //function
// var age = 36;
// var obj = {
//     name: 'Dejan ',
//     age: 26,
//     city: 'Nis'
// };

// function change(a, b) {
//     a = 30;
//     b.city = "Subotica";
// }

// change(age, obj);
// console.log(age);       // => 36
// console.log(obj.city);  // => Subotica



