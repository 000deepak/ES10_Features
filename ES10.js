//1.flat()
//2.flatmap()
//3.Object.fromEntries
//4.Optional catch binding



//The flat() -method enables you to easily concatenate all sub-array elements of an array
arr = [10, [20, [30]]];

console.log(arr.flat());     // => [10, 20, [30]]
console.log(arr.flat(1));    // => [10, 20, [30]]
console.log(arr.flat(2));    // => [10, 20, 30]

//The flatMap() -method combines map() and flat() into one method. 
//It first creates a new array with the return value of a provided function 
//and then concatenates all sub-array elements of the array.

console.log(arr.map(value => [Math.round(value)]));    
// => [[4], [20], [26]]

console.log(arr.flatMap(value => [Math.round(value)]));    
// => [4, 20, 26]

//Object.fromEntries
//This static method allows you to easily transform a list of key-value pairs into an object:
const myArray = [['one', 1], ['two', 2], ['three', 3]];
const obj = Object.fromEntries(myArray);
console.log(obj);    // => {one: 1, two: 2, three: 3}

//optional catch binding 
try {
    // use a feature that the browser might not have implemented
  } catch {
    // do something that doesn’t care about the value thrown
  }