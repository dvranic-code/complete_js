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


// //////////////////////////////////////////////////////
// // Lecture: Destructuring

// // ES5
// var john = ['John', 26];
// var name5 = john[0];
// var age5 = john[1];

// //ES6
// const [name, age] = ['john', 26];

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// const {firstName, lastName} = obj;
// console.log(firstName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);


// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1983);
// console.log(age2);
// console.log(retirement);


// /////////////////////////////////////
// // Lecture: Arrays

// const boxes = document.querySelectorAll('.box'); //node list

// // ES5
// // var boxesArr5 = Array.prototype.slice.call(boxes);

// // boxesArr5.forEach(function(cur) {
// //     cur.style.backgroundColor = 'dodgerblue';
// // });

// // for( var i = 0; i < boxesArr5.length; i++) {

// //     if(boxesArr5[i].className === 'box blue') {
// //         continue;
// //     }

// //     boxesArr5[i].textContent = 'I changed to blue!!!';

// // }


// //ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach( cur => cur.style.backgroundColor = 'dodgerblue' );

// for (const cur of boxesArr6) {
//     if(cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }


// //es5
// var ages = [12, 17, 8, 21, 14, 11 ]; 

// var full = ages.map(function(cur) {
//     return cur >= 18;
// });

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// //ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >=18));


//////////////////////////////////////////////
/// Lecture: Spread operator

// function addFourAges(a, b, c, d) {
//     return a+ b + c + d;
// }

// var sum1 = addFourAges(18,30,12,21);

// console.log(sum1);

// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyVasic = ['Elena', 'Agna', "Mina"];
// const bigFamily = [...familySmith, ...familyVasic];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes  = document.querySelectorAll('.box');
// const change = [h, ...boxes];
// Array.from(change).forEach(cur => cur.style.color = 'purple');


////////////////////////////////////////////////////
// Lexture: Rest parameters

/*
// ES5

function isFullAge5() {

    //argument keyword
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log( (new Date().getFullYear() - cur) >= 18 );
    });

}

// isFullAge5(1999, 2013);
// isFullAge5(1999, 2013, 1823, 2006);

// ES6
function isFullAge6(...years) {

    years.forEach( cur => console.log( (new Date().getFullYear() - cur) >= 18 ) )

}

isFullAge6(1999, 2013, 1823, 2006);
*/

// ES5
// function isFullAge5(limit) {

//     //argument keyword
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function(cur) {
//         console.log( (new Date().getFullYear() - cur) >= limit );
//     });

// }

// isFullAge5(21, 1999, 2013);
// isFullAge5(8, 1999, 2010);
// // isFullAge5(1999, 2013, 1823, 2006);

// // ES6
// function isFullAge6(limit, ...years) {

//     years.forEach( cur => console.log( (new Date().getFullYear() - cur) >= limit ) )

// }

// isFullAge6(8, 1999, 2013, 1823, 2006);

/////////////////////////////////////////////
// Lexture: Default parameters

// ES5
// function SmithPerson5(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;

// }

// var john = new SmithPerson5('John', 1990);
// var emily = new SmithPerson5('Emily', 'Diaz', 1983, 'Diaz');

// ES6
// function SmithPerson5(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;

// }

// var dejan = new SmithPerson5('Dejan', 1983);
// var elena = new SmithPerson5('Elena', 'Rudic', 1978, 'srbija');


///////////////////////////////////////////////////////////////
// Lecture: Maps

// const question = new Map();

// question.set('question', 'What is the official name of major JS version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'correct answer!');
// question.set(false, 'Wrong!!!!');

// console.log(question.get('question'));
// console.log(question.size);

// if(question.has(4)) {
//     question.delete(4);
// }

// console.log(question);

// question.clear();
// console.log(question);

// question.forEach((val, key) => {
//     console.log(`This is key: ${key}=${val}`);
// });

// for ( let [key, val] of question.entries() ) {

//     if (typeof(key) === 'number') {
//         console.log(`This is key: ${key}=${val}`);
//     }

// }

// const ans = parseInt(prompt('Write correct ans'));

// console.log(question.get(ans === question.get('correct')));

/**
 * Maps are better than object bacause:
 * 
 * 1. We can use anything as keys
 * 2. they are iterable we can loop
 * 3. it is easy to get a size of MAP with 'size' property
 * 4. we can easily add or delate date from a map - hash maps
 */


/////////////////////////////////////////////
// Lecture: Classes

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1999, 'teacher');
// john5.calculateAge();

//ES6
// class Person6 {

//     //every class must have CONSTRUCTOR
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     //methods
//     calculateAge() {
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!');
        
//     }

// }

// const john6 = new Person6("Dejan", 1983, 'developer');
// john6.calculateAge();
// Person6.greeting();

///////////////////////////////////////////////////
// Lecture: SubClasses

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {

//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// //conect two prototypes
// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

// var john5 = new Person5('John', 1999, 'teacher');
// john5.calculateAge();

// var dejan = new Athlete5("dejan", 1983, 'developer', 3, 10);
// dejan.calculateAge();
// dejan.wonMedal();

//ES6
// class Person6 {

//     //every class must have CONSTRUCTOR
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     //methods
//     calculateAge() {
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

// }

// const john6 = new Person6("Dejan", 1983, 'developer');
// john6.calculateAge();

// class Athlete6 extends Person6 {
//     constructor (name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals
//     }

//     wonMedal() {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const dejan6 = new Athlete6("dejan", 1988, 'karate', 2, 8);
// dejan6.wonMedal();
// dejan6.calculateAge();


/**
 * Suppose that you are working in a small town
 * administration, and you are in charge of two town elements:
 * 1. Parks
 * 2. Streets
 * 
 * It is a very small town, so right now there are only 3 parks and 4 streets. 
 * All parks and streets have a name and a build year.
 * 
 * At an end of year meeting, your boss wants a final report with the following:
 * 1. Tree density of each park in the town (number of trees/park area)
 * 2. Average age of town's parks (sum all ages/number of parks)
 * 3. The name of park that has more than 1000 trees
 * 
 * 4. Total and average length of all streets
 * 5. Size classification of all streets: default=normal
 *      -tiny
 *      -small
 *      -normal
 *      -big
 *      -huge
 * 
 * All reports console log to screen
 */

/**
 * TownElement
 * 
 * @param name
 * @param builtYear
 */
class TownElement {
    constructor (name, builtYear)
    {
        this.name = name;
        this.builtYear = builtYear;
    }
}

/**
 * Park
 * 
 * @param name
 * @param builtYear
 * @param numTrees
 * @param area
 */
class Park extends TownElement
{
    constructor(name, builtYear, numTrees, area)
    {
        super(name, builtYear);
        this.numTrees = numTrees;
        this.area = area;
    }

    treeDensity()
    {
        const density = this.numTrees/this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }

}

const greenPark = new Park("Green Park", 1997, 998, 3.5);
const oakPark = new Park("Oak Park", 1950, 1998, 6);
const dudovaSuma = new Park("Dudova Suma", 2000, 600, 1);

const allParks = [greenPark, oakPark, dudovaSuma];

/**
 * Street
 * 
 * @param name
 * @param builtYear
 * @param streetLength
 * @param classification
 */
class Street extends TownElement
{
    constructor (name, builtYear, streetLength, size = 3)
    {
        super(name, builtYear);
        this.streetLength = streetLength;
        this.size = size;
    }

    classification() 
    {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, was built in ${this.builtYear}, is a ${classification.get(this.size)} street.`);
        
    }
}

const glavna = new Street("Glavna ulica", 1871, 4.68, 4);
const prviMaj = new Street("Prvi Maj", 1971, 9.28, 5);
const korzo = new Street("Korzo", 1971, 3);
const strahinja = new Street("Strahinjica Bana", 1971, 2.6);

const allStreets = [glavna, prviMaj, korzo, strahinja];

function reportParks(p) {

    console.log('-----------PARKS REPORT--------------');

    //Tree density
    p.forEach( park => park.treeDensity() );
    
    //Average age
    const ages = p.map(el => new Date().getFullYear() - el.builtYear );
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have average age of ${avgAge} years.`);    

    //Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees~`);

}

function reportStreet(s) {

    console.log('-----------STREETS REPORT--------------');

}

function calc(arr) {

   const sum = arr.reduce( (prev, cur, index) => prev + cur, 0);

   return [sum, sum / arr.length];

}

reportParks(allParks);
reportStreet(allStreets);