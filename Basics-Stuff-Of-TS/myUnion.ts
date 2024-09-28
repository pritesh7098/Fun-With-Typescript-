// using union in ts makes the developer's life fucking easier

type coder = {
  name: string;
  role: string;
};

type writter = {
  name: string;
  role: string;
};

let pritesh: coder | writter = { name: "PRITESH", role: "coder" };

pritesh = { name: " Pritubhau", role: "writter" };

// another case
// it can be best to use with the functions below :
// basically a scenario based.
function getDbUser(user: string | number) {
  console.log(`the user ${user}`);
}

getDbUser("pritesh");
getDbUser(123);

// With arrays

const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const data2: string[] = ["a", "b", "c", "d"];
const data3: number[] | string[] = ["a", "b", "c", "d"];

// now in this case it has to be complete no or a string not both. to do so se the below implementation.

const data4: (number | string)[] = ["a", "b", "c", 1];

// Another one

let scholorship: "poor" | "middleclasss" | "upperclass";

//scholorship = "higherclass"; // gives error bcxz of security issues

