    Write a function to remove duplicates from a sorted array.


    Implement all. Checks if the provided predicate function returns true for all elements in a collection.

      all([4, 2, 3], (x) => x > 1); // true
      all([1, 2, 3]); // true

    Implement any. Checks if the provided predicate function returns true for at least one element in a collection.

      any([0, 1, 2, 0], (x) => x >= 2); // true
      any([0, 0, 1, 0]); // true

    Implement compact. Removes falsy values from an array.

        compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
          // [ 1, 2, 3, 'a', 's', 34 ]

    Implement maxBy. Returns the maximum value of an array, after mapping each element to a value using the provided function.

        maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (x) => x.n); // 8
        maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8

    Implement objectFromPairs. Creates an object from the given key-value pairs.

        objectFromPairs([['a', 1],['b', 2],]); // {a: 1, b: 2}

    Implement objectToPairs. Creates an array of key-value pair arrays from an object.

      objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]

    Implement pluck. Converts an array of objects into an array of values corresponding to the specified key.

const simpsons = [
{ name: 'lisa', age: 8 },
{ name: 'homer', age: 36 },
{ name: 'marge', age: 34 },
{ name: 'bart', age: 10 },
];
pluck(simpsons, 'age'); // [8, 36, 34, 10]

    Implement chunk. Chunks an array into smaller arrays of a specified size.

chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

    Implement deepFlatten. Need to use recursion. Deep flattens an array.

deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]

    Implement dropWhile. Removes elements in an array until the passed function returns true. Returns the remaining elements in the array.

dropWhile([1, 2, 3, 4], (n) => n >= 3); // [3, 4]

    Implement groupBy. Groups the elements of an array based on the given function.

groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}

    Implement shuffle. Randomizes the order of the values of an array, returning a new array. Use the Fisher-Yates algorithm to reorder the elements of the array.

    Implement zip. Creates an array of elements, grouped based on their position in the original arrays.

zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]

    Implement zipObject. Associates properties to values, given array of valid property identifiers and an array of values.

zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}

    Implement deepGet. Gets the target value in a nested JSON object, based on the keys array.

let index = 2;
const data = {
foo: {
foz: [1, 2, 3],
bar: {
baz: ['a', 'b', 'c'],
},
},
};
deepGet(data, ['foo', 'foz', index]); // get 3
deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null

    Implement merge. Creates a new object from the combination of two or more objects.

const object = {
a: [{ x: 2 }, { y: 4 }],
b: 1,
};
const other = {
a: { z: 3 },
b: [2, 3],
c: 'foo',
};
merge(object, other);
// { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }

    Implement pick. Picks the key-value pairs corresponding to the given keys from an object.

pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }

    Implement omit. Omits the key-value pairs corresponding to the given keys from an object.

omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }

    Implement renameKeys. Replaces the names of multiple object keys with the values provided.

const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
renameKeys({ name: 'firstName', job: 'passion' }, obj);
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }

    Implement flip. Takes a function as an argument, and returns a function which takes arguments in the reversed order.

const subtract = (x, y) => x - y;

flip(subtract)(100, 90); // -10

    Implement once. Ensures a function is called only once.

const hello = once(() => {
console.log('hello');
});
hello(); // outputs 'hello'
hello(); // no output

    Implement compose. Performs right-to-left function composition.

const add5 = (x) => x + 5;
const multiply = (x, y) => x \* y;

const multiplyAndAdd5 = compose(add5, multiply);

multiplyAndAdd5(5, 2); // 15
