// generics in typescript

// generic type allows us to create a type that can be used with any type

let Value: any = 1;
function createGenericType<T>(arg: T): T {
  return Value;
}

createGenericType("pritesh");

// generic functions

function myProducts<T>(products: T[]): T {
  let myNum = 2;
  return products[myNum];
}

// generic functions with arrow functions

function myProductsArrow<T>(products: T[]): T {
  let myNum = 2;
  return products[myNum];
}

const myProductsArr = <T>(products: T[]): T => {
  let myNum = 4;
  return products[myNum];
};


