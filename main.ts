function* simpleGenerator() {
    yield 1;
    yield 4;
}

let iterator = simpleGenerator();

let iteratorResult = iterator.next();
console.log(iteratorResult);

iteratorResult = iterator.next();
console.log(iteratorResult);

iteratorResult = iterator.next();
console.log(iteratorResult);
