// const x = '1';
// const y = '2';

// console.log(x);
// console.log(y);

// // %s format variable to string
// // %d number
// // %i integer
// // %o object

// console.log('I am %s and my age is %d', "Deep",25);


// console.count('Hey i am learning Node');
// console.count('Hey i am learning Node');
// console.count('Hey i am learning Node');

// console.countReset('Hey i am learning Node');

// console.count('Hey i am learning Node');


// const function1 = () => {
//     console.trace();
// }

// const function2 = () => {
//     function1();
// }

// function2();

const sum = (n1,n2) => {
    console.log(`The sum of two number is ${n1+n2}`);
}

const multi = (n1,n2) => {
    console.log(`The multi of two number is ${n1*n2}`);
}


const measureTime = () => {
    console.time("sum()");
    sum(1,2);
    console.timeEnd("sum()");
    console.time('multi()');
    multi(1,2);
    console.timeEnd('multi()');
}

// measureTime();

const ProgressBar = require('progress');
const chalk = require('chalk');

const bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas' , {
    total:20,
});

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)

console.log(chalk.blue('This is me learning Node'))

