/**
 * Objects
 */

// var john = {
//   fullName: 'John Smith',
//   mass: 95,
//   height: 1.92,
//   calcBmi: function() {
//     this.bmi = this.mass / ( this.height * this.height );
//     return this.bmi;
//   }
// }
//
// var mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBmi: function() {
//     this.bmi = this.mass / ( this.height * this.height );
//     return this.bmi;
//   }
// }
//
// if (john.calcBmi() > mark.calcBmi()) {
//   console.log(john.fullName + ' has greater BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + ' has greater BMI of ' + mark.bmi);
// } else {
//   console.log('They both have same BMI.');
// }


/**
 * Loops and iterations
 */

// FOR LOOP
var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i=0; i<john.length; i++) {
//  console.log(john[i]);
// }

// WHILE LOOP
var i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++;
}
