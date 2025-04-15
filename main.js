// dumb project with js (learning)

// using if and else
let gender = 'male';
let rich = true;
let age = 21;

if (gender == 'male') {
  console.log('you are a male');
} else {
  console.log('you are a female');
}

if (rich == true) {
  console.log('you are rich');
} else {
  console.log('you are poor');
}

if (age == 21) {
  console.log('you are eligible to get married');
} else {
  console.log('you are kid');
}

console.log('================================');

// using nested if
let student = true;
let classroom = 'mern';
let sid = 2354;

if (student == true) {
  if (classroom == 'mern') {
    if (sid == 2354) {
      console.log('welcome to your classroom');
    }
  }
} else {
  console.log('you are not allowed here');
}

console.log('==========================');

// using else if
let score = 0;

if (score > 100 || score < 0) {
  console.log('your score cannot be more than 100 or less than 0');
} else if (score >= 80) {
  console.log('your grade is a+');
} else if (score >= 70) {
  console.log('your grade is a');
} else if (score >= 60) {
  console.log('your grade is a-');
} else if (score >= 50) {
  console.log('your grade is b');
} else if (score >= 40) {
  console.log('your grade is c');
} else if (score >= 33) {
  console.log('your grade is d');
} else {
  console.log('you have failed to pass');
}
