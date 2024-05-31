const error = new Error("Something went wrong");

// console.log(error.stack);
// console.log(error.message);

// throw new Error('Somewthing went wrong');

const {CustomError} = require('./customError');

// throw new CustomError("Error occured : This is a custom error");

// Hanlde exceptions using try and catch
// const doSomething = () => {
//     console.log('do something func')
// }

// try{
//     doSomething()
// } catch(e){
//     console.log("error occur");
//     console.log(e);
// }

function doSomething () {
     const data = fetch('localhost:3000/api');
    console.log('do something func')
    // const data = 'do something func'
    return data;
}

// Uncaught exceptions
// process.on('uncaught exception', (err) => {
//     console.log('There was an uncaught exceptions');
//     process.exit(1);
// });

// doSomething();

// Exception with promises

// const promise = new Promise((resolve,reject) => {
//     if(true){
//         resolve(doSomething());
//     }
//     else{
//         reject(doSomething());
//     }
// })

// promise.then((val) => {
//     console.log(val)
// }).catch((er) => {
//     console.log(er);
// })

// Exception with Async and await

const someFunc = async () => {
    try{
        await doSomething();
    }catch(err){
        throw new CustomError(err.message);
    }
}

someFunc();