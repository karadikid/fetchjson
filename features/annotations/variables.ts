// Type
let apples: number = 5;
let speed: string = "fast";

// Array
let colors: string[] = ["red", "green", "blue"];

// Classes
class Car {}

let car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function returns the 'any' type

const json = '{"x": 10, "y": 20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); // {x: 10, y:20};

// 2) When we declare a variable on one line and initialize it later

let words = ["red", "green", "blue"];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// Iterating over object by keys
// https://dmitripavlutin.com/how-to-iterate-easily-over-object-properties-in-javascript/

// Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];

// Multple types for variable such as objects, or class instances
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
