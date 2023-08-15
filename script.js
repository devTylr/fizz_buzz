let userNum = prompt('Choose a number.');

for(let i = 1; i <= userNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBUZZ!');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}
