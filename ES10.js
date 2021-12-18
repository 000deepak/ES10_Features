//ES10 features are
//1.flat()                //returns array of concatenated subarrys
//2.flatmap()             //returs array of concatenated elements from map function
//3.Object.fromEntries()  //converts arrya back to object
//4.Optional catch binding

//-------------------------------------------flat()
//concatenate all sub-array elements of an array
arr = [10, [20, [30]]];

console.log(arr.flat()); // => [10, 20, [30]]
console.log(arr.flat(1)); // => [10, 20, [30]]
console.log(arr.flat(2)); // => [10, 20, 30]

//-------------------------------------------flatMap()
//method combines map() and flat() into one method.
//flat concatenates the elements of subarrays
//map returns the elements from result of map function

console.log(arr.map((value) => [Math.round(value)]));
// => [[4], [20], [26]]

console.log(arr.flatMap((value) => [Math.round(value)]));
// => [4, 20, 26]

//-------------------------------------- -Object.fromEntries(array)
//transform a list of key-value pairs into an object:(array back to object)
const myArray = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];
const obj = Object.fromEntries(myArray);
console.log(obj); // => {one: 1, two: 2, three: 3}

//--------------------------------------- optional catch binding
try {
  // use a feature that the browser might not have implemented
} catch {
  // do something that doesn’t care about the value thrown
}

//--------------------------------trimStart/End

const message = "   Hello ES10   ";

console.log(message.trimStart()); // outputs 'Hello ES10   '
console.log(message.trimEnd()); // outputs '   Hello ES10'
console.log(message); // outputs '   Hello ES10   '


