// functions in ts
// it is necessary to add types with function arguments.as it can't be infer by ts.

function addition1(num: Number) {
  // return num + 5;
}

// console.log(addition(10));

// assigning types to functions arguments
function signUp(name: string, password: string, iseligible: boolean) {}

signUp(" pritesh", "13", false);

let login = (name: string, password: string, iseligible: boolean = false) => {};

login("pritesh", "123");

// This is also the case :

function addition2(num: number): number {
  // return " Heyy Pritesh"; // it has to give error message but we dont have introduce a type for function body yet
  return num + 5; // now it works fine
}

addition2(10);

// for arrow functions

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(10, 20));

// typescript is smart enough to understand context switches but sometime u have to define types
const myHeroes = ["John", "shaktiman"];

myHeroes.map((heros) => {
  return `heoes are ${heros}`;
});

// handling and showing errors gracefully with typescript types like -  void and never

function ConsoleError(errorMsg: string): void {
  console.log(errorMsg);
}

function handleError(error: string): never {
  throw new Error();
}

export {};
