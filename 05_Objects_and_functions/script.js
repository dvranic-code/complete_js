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


/**
 * FUNCTIONS
 * 
 * A function is an instance of the Object type
 * A function behaves like any other object
 * We can store functions in a variable
 * We can pass a function as an argument to another function
 * We can return a function from a function
 * 
 * FIRST-CLASS FUNCTIONS
 */

//  var years = [2004, 1965, 1937, 1983, 1978];

//  function arrayCalc(array, fn) {
//      var result = [];

//      for(var i=0; i<array.length; i++) {
//          result.push(fn(array[i]));
//      }

//      return result;
//  }

//  function calcAge(year) {
//      return 2019-year;
//  }

//  var ages = arrayCalc(years, calcAge);

//  function isFullAge(el) {
//      return el > 18;
//  }

// var fullAges = arrayCalc(ages, isFullAge);

//  console.log(ages);
//  console.log(fullAges);

//  function maxHeartRate(el) {

//     if ( el >= 18 && el <= 80) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
     
//  }

//  var maxRate = arrayCalc(ages, maxHeartRate);
//  console.log(maxRate);
 


// Functions returning functions
// function interviewQuestions(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
        
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ', what subject do you teach?');
            
//         }
//     } else {
//         return function(name) {
//             console.log("hello" + name +', what do you do?');
            
//         }
        
//     }
// }

// var teacherQuestion = interviewQuestions('teacher');

// teacherQuestion('Dejan');

// var designerQuestion = interviewQuestions('designer');
// designerQuestion('dejan');

// interviewQuestions('teacher')('Elena');



// Function IIFE - for data privacy
// function game( ) {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(2);



/**
 * CLOSURES
 * 
 * An inner function has always access to the variables
 * and parameters of its outer function, even after the
 * outer function has returned
 * 
 */
// function retirement(retAge) {
//     var a = ' years left until retirement.'
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retAge - age) + a);
        
//     }
// }

// var retSerbia = retirement(65);
// retSerbia(1983);
// var retGermany = retirement(66);
// var retIceland = retirement(67);

// retGermany(1983);
// retIceland(1983);

// function interviewQuestions(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log(name + ', what subject do you teach?');
//         } else {
//             console.log("hello" + name +', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestions('teacher');

// teacherQuestion('Dejan');



//Bind, call and apply
// method borowing - call() => set "this" variable
// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'am ' + this.name + ', I\'am a ' + this.job + ', ' + this.age +' years old.');
            
//         } else if (style === 'friendly') {
//             console.log('Hey, what\'s up. I\'am ' + this.name + ', I\'am a ' + this.job + ', ' + this.age +' years old. Hava a nice '+ timeOfDay+'.');
            
//         }
//     }
// };

// var dejan = {
//     name: 'Dejan',
//     age: 36,
//     job: 'web developer'
// };

// john.presentation('formal', 'morning');

// john.presentation.call(dejan, 'friendly', 'evening');

// //apply()
// john.presentation.apply(dejan, ['friendly', 'afternoon']);

// //bind() => returns function
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning'); 
// var dejanFormal = john.presentation.bind(dejan, 'formal');
// dejanFormal('day');
// dejanFormal('evening');


// var years = [2004, 1965, 1937, 1983, 2001];

// function arrayCalc(array, fn) {
//     var result = [];

//     for(var i=0; i<array.length; i++) {
//         result.push(fn(array[i]));
//     }

//     return result;
// }

// function calcAge(year) {
//     return 2019-year;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calcAge);
// var fullAgeJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(fullAgeJapan);
// console.log(ages);


/**
 * CHALANGE
 */

(function() {

    function Question(question, answers, corectAnswer) {
        this.question = question;
        this.answers = answers;
        this.corectAnswer = corectAnswer;
     };
     Question.prototype.printQuestion = function(num = 0) {
         console.log("Q" + (num+1) + ": " + this.question);
         for (var i=0; i<this.answers.length; i++) {
             console.log(i + ": " + this.answers[i]);
         }   
     }
     Question.prototype.checkAnswer = function(el, callback) {
         var sc;

         if (el == this.corectAnswer) {
             console.log("Correct!!!");
             sc = callback(true);
         } else {
            console.log("That is not correct!");
            sc = callback(false);
         }

         this.displayScore(sc);
     }

     Question.prototype.displayScore = function(score) {
         console.log('Your current score is: '+ score);
         console.log("====================================");
         
     }
    
     var q1 = new Question("What is my name?", ['Vladan', 'Elena', 'Dejan'], 2);
     var q2 = new Question("What is my job?", ['architect', 'web developer', 'carpenter', 'coach'], 1);
     var q3 = new Question("How old I am?", [36, 40, 26], 0);
     var q4 = new Question("Do you like this game?", ['YES', 'NO'], 1);
    
     var questions = [];
     questions.push(q1);
     questions.push(q2);
     questions.push(q3);
     questions.push(q4);

     function score() {
         var sc = 0;
         return function(correct) {
             if (correct) {
                 sc++;
             }
             return sc;
         }
     }

     var updateScore = score();

     askQuestion();

     function askQuestion() {
         var n = Math.floor(Math.random() * questions.length);

         questions[n].printQuestion(n);

         var usrAnswer = prompt('Write the number of correct answer from console:');
         if (usrAnswer !== 'exit') {
            questions[n].checkAnswer(usrAnswer, updateScore);
            askQuestion();
         }
     }

})();