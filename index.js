// console.log('Learning node');
// console.log('this is my first time learning node');
// console.log('hey');


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

// console.log(JSON.stringify(ford,undefined,3));
// console.log(JSON.stringify(tesla,null,2));

// Path module

const path = require('path');

const filePath = '/Users/deepnanavati/Desktop/BuildUP/Node-Learn/files/sample.txt';

// Directory name
// console.log(path.dirname(filePath));
// console.log(__dirname);

// Base name
// console.log(path.basename(filePath));
// console.log(__filename);

// Extension
// console.log(path.extname(filePath));

// Join path
const sampleFile = 'sample.txt';
// console.log(path.join(path.dirname(filePath),sampleFile));

// console.log(path.join(__dirname,sampleFile));

const fs = require('fs');
const fsPromise = require('fs').promises;


// Reading from a file - Async
// fs.readFile(filePath, 'utf-8', (err,data) => {
//     if(err){
//         throw new Error('Some error occured');
//     }
//     else{
//         console.log(data);
//     }
// })

// try{
//     const data  = fs.readFileSync(path.join(__dirname, 'files','sample.txt'),'utf-8')
//     console.log(data);
// }
// catch(err){
//     console.log(err)
// }


const fileReading = async() => {
    try{
        const data = await fsPromise.readFile(filePath,{encoding: 'utf-8'});
        console.log('Fs Promises :',data);
    }
    catch(err){
        console.log(err);
    }
}

// fileReading();


// Writting into files
const txtPath = path.join(__dirname,'files','text.txt');
const content = "Content added through write file";

// fs.writeFile(txtPath, content, (err) => {
//     if(err){
//         throw new Error('Some error occured');
//     }
//     else{
//         console.log('Data added in text file');
//     }
//     fs.readFile(txtPath,'utf-8',(err,data) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(data);
//         }
//     })
// })


// Writing file using fsPromise
// Using fsPromise is generally best practice as it looks more consise and we don't have to use callbacks again and again

// const writtingInFile = async () => {
//     try{
//         await fsPromise.writeFile(txtPath,content);
//         await fsPromise.appendFile(txtPath,'\n This is append text');
//         const data = await fsPromise.readFile(txtPath);
//         console.log(data.toString());
//         }
//         catch(err){
//             console.log(err);
//     }
// }

// writtingInFile();

const writtingInFile = async () => {
    try{
        await fsPromise.writeFile(txtPath,'\n We have given new name to the file', {flag : 'a+'}, );
        await fsPromise.appendFile(txtPath,'\n This is append text');
        // renaming the file
        await fsPromise.rename(txtPath,path.join(__dirname,"files","new_text.txt"))
        const data = await fsPromise.readFile('./files/new_text.txt');
        console.log(data.toString());
        }
        catch(err){
            console.log(err);
    }
}

writtingInFile();

