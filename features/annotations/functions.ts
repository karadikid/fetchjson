// Annotating functions, both arguments and return value

const add = (a: number, b: number): number => {
  return a + b;
};

// No inference for arguments, must be annotated.
// Output can be inferred, however we will be explicit!

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Return void, or undefined, or null
const logger = (message: string): void => {
  console.log(message);
};

// Keyword: 'never' for no value returned EVER!
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
