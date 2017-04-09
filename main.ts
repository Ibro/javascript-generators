// function* simpleGenerator() {
//     yield 1;
//     yield 4;
// }

// // let iterator = simpleGenerator();

// // let iteratorResult = iterator.next();
// // console.log(iteratorResult);

// // iteratorResult = iterator.next();
// // console.log(iteratorResult);

// // iteratorResult = iterator.next();
// // console.log(iteratorResult);


// let iterator = simpleGenerator();

// let iteratorResult;

// do {
//     iteratorResult = iterator.next();
//     console.log(iteratorResult);
// } while (!iteratorResult.done);


// for (let value of simpleGenerator()) {
//     console.log(value);
// }


function print(a) {
    console.log('a: ' + a); // prints out 192
}

function* generator() { 
    print(yield 'Iterator result value'); // wait so we can pass parameter to print function
}

var iterator = generator();

// when calling .next() for the first time we never pass value since it will get ignored in any case
let iteratorResult = iterator.next(); 
console.log(iteratorResult); // Object {value: "Iterator result value", done: false}

iteratorResult = iterator.next(192); // this will be passed as parameter to function print() inside of generator() function
console.log(iteratorResult); // Object {value: undefined, done: true}
