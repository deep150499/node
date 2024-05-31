console.log('Learning node');
console.log('this is my first time learning node');
console.log('hey');


// To keep the app running
// process.exit(0);

// To crash the app
// process.exitCode = 1;

const _ = require('lodash');

const arr = [1,4,6,8];
// console.log(_.last(arr));

const cowsay = require('cowsay');

// console.log(cowsay.say({
//     text: "I am learning NPM module"
//     e: "00",  
//     t: "U",
// }))

// const vehicle = require('./car');
const {ford,tesla} = require('./car');

// console.log(vehicle);
// console.log(ford);
// console.log(tesla);

console.log(ford);
console.log(tesla);

