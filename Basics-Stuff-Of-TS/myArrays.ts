// Arrays in ts
// remember by default the array type is never we have to explicitely change it

const superHeroes: string[] = [];
const superHeroes2: number[] = [];

const superHeroes3: Array<string> = [];
const superHeroes4: Array<number> = [];

// none of the above way is wrong it deopend how we use it.

type user = {
  name: string;
  address: string;
};

let fetchUser: user[] = [];

let finalOp = fetchUser.push({ name: "pritesh", address: "Shirdi" });
console.log(finalOp);

export {};
