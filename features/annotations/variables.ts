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

const coordinates = JSON.parse(json);

console.log(coordinates); // {x: 10, y:20};

// Iterating over object by keys
// https://dmitripavlutin.com/how-to-iterate-easily-over-object-properties-in-javascript/
