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
// var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i=0; i<john.length; i++) {
//  console.log(john[i]);
// }

// WHILE LOOP
// var i = 0;
// while(i < john.length) {
//   console.log(john[i]);
//   i++;
// }

<<<<<<< Updated upstream

// CHALANGE
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i=0; i<this.bills.length; i++) 
    {
      //Determine precentage based on tipping rules
      var precentage;
      var bill = this.bills[i];

      if (bill < 50) {
        precentage = .2;
      } else if ( bill >= 50 && bill < 200 ) {
        precentage = .15;
      } else {
        precentage = 0.1;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * precentage;
      this.finalValues[i] = bill + (bill * precentage);
    }
  }
}

john.calcTips();

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i=0; i<this.bills.length; i++) 
    {
      //Determine precentage based on tipping rules
      var precentage;
      var bill = this.bills[i];

      if (bill < 100) {
        precentage = .2;
      } else if ( bill >= 100 && bill < 300 ) {
        precentage = .1;
      } else {
        precentage = 0.25;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * precentage;
      this.finalValues[i] = bill + (bill * precentage);
    }
  }
=======
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i=0; i<john.length; i++) {
  if(typeof john[i] !== 'string') continue;
 console.log(john[i]);
}

for (var i=0; i<john.length; i++) {
  if(typeof john[i] !== 'string') break;
 console.log(john[i]);
}

for (var i=john.length; i>0; i--) {
 console.log(john[i-1]);
>>>>>>> Stashed changes
}

function calcAverage(tips) {

  var sum = 0;

  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }

  return sum/tips.length;

}

// Do calculation

mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
} else {
  console.log("They both pay same tip of $"+john.average);
}