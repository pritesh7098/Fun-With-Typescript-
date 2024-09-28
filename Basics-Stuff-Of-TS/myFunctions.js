"use strict";
// functions in ts
// it is necessary to add types with function arguments.as it can't be infer by ts.
Object.defineProperty(exports, "__esModule", { value: true });
function addition1(num) {
    // return num + 5;
}
// console.log(addition(10));
// assigning types to functions arguments
function signUp(name, password, iseligible) { }
signUp(" pritesh", "13", false);
var login = function (name, password, iseligible) {
    if (iseligible === void 0) { iseligible = false; }
};
login("pritesh", "123");
// This is also the case :
function addition2(num) {
    // return " Heyy Pritesh"; // it has to give error message but we dont have introduce a type for function body yet
    return num + 5; // now it works fine
}
addition2(10);
// for arrow functions
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));
// typescript is smart enough to understand context switches but sometime u have to define types
var myHeroes = ["John", "shaktiman"];
myHeroes.map(function (heros) {
    return "heoes are ".concat(heros);
});
// handling and showing errors gracefully with typescript types like -  void and never
function ConsoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(error) {
    throw new Error();
}
