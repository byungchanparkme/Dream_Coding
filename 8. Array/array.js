'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position (인덱스 번호를 활용해 원하는 데이터에 접근)
const fruits = ['🍅', '🍓']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i+1} element : ${fruits[i]}`);
}

// b. forEach
// with callback function
// callback function 에는 각각 value, index number, array 를 인자로 가짐.
// Performs the specified action for each element in an array.
fruits.forEach((fruit, idx) => console.log(`${idx+1} element : ${fruit}`));


// c. for ~ of
for (let fruit of fruits) {
    console.log(fruit);
}

console.clear();
// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍗', '🍟');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍿', '🧂');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍕', '🍙', '🍚');
console.log(fruits);
// 2nd argument : deleteCount
// without 2nd argument: delete all the elements from the start number
fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 1, '🍜', '🦪');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍬', '🍛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍓'));
console.log(fruits.indexOf('🍜'));

// includes
console.log(fruits.includes('🍓'));
console.log(fruits.includes('🍜'));

// lastIndexOf
console.clear();
fruits.push('🍜');
console.log(fruits);``
console.log(fruits.indexOf('🍜'));
console.log(fruits.lastIndexOf('🍜'));
