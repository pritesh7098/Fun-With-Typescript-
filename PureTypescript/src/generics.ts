// generics in typescript

// generic type allows us to create a type that can be used with any type

let Value: any = 1;
function createGenericType<T>(arg: T): T {
  return Value;
}

createGenericType("pritesh");
