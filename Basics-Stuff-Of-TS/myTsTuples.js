// tuples in ts :
// nothing but a special type of an array which bsaically provided by ts to us.
// like when we have to use multuple data types in one array so we use union logic right but there is another way also.
var car = ["Toyota", 2022, "Red"];
console.log(car); // Output: [ "Toyota", 2022, "Red" ]
var user = ["Pritesh", 20, true];
console.log(user); // Output: [ "Pritesh", 20, true ]
// remember it has a strictness always the data type which u have provided must be in a arrray.
user.push(false); // it is allowed to add a thingy which we have given permisions like string, number, boolean.
// and not only that u can use other array methods also so sometimes using tuples can be headache so make sure don't so much rely on that instead use another ways.
// Great read about the problem : https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
// but in real world scenario we will use other methods like push, map, filter, reduce, etc.
