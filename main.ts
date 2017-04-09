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


// function print(a) {
//     console.log('a: ' + a); // prints out 192
// }

// function* generator() { 
//     print(yield 'Iterator result value'); // wait so we can pass parameter to print function
// }

// var iterator = generator();

// // when calling .next() for the first time we never pass value since it will get ignored in any case
// let iteratorResult = iterator.next(); 
// console.log(iteratorResult); // Object {value: "Iterator result value", done: false}

// iteratorResult = iterator.next(192); // this will be passed as parameter to function print() inside of generator() function
// console.log(iteratorResult); // Object {value: undefined, done: true}

// function* generator(a) {
//     let b = 5 * (yield (a + 5));
//     console.log('b:', b); // 40

//     let c = yield (b / 10);
//     console.log('c:', c); // 4

//     let total = a + b + c;
//     yield total / 2;

//     console.log('a + b + c:', total); // 50
// }

// let it = generator(6);

// // we do not send anything into next() because it gets ignored during first time
// console.log(it.next());   // {value: 11, done: false}

// console.log(it.next(8));  // {value: 4, done: false}

// console.log(it.next(4));  // {value: 25, done: false}

// console.log(it.next(10)); // {value: undefined, done: true}

function* generator() { 
    let a = 5 - (yield 3);
    console.log('a:', a);
}

let iterator = generator();

console.log(iterator.next()); 
console.log(iterator.next(1));