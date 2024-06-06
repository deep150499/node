console.log('Start Operation');


function sleep(millisecond) {
    let startTime = new Date().getTime();

    console.log('Operation is running');

    while(new Date().getTime() < startTime + millisecond){
        console.log('In progress');
    }
    console.log('Operation is complete');
}

sleep(1000);
console.log('Do something else')