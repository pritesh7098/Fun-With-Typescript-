// this is not a part of typescript directly but u have to be extra cautious about using this

function isAdult(age: number | null) {
  if (!age) {
    console.log("Age is required");
    return;
  }

  age.toString(); // perform any operations on the age.
}

// in above case it is necessary to take care that age can be null also so u have to provide a logic for it like age is required.
// there are many cases like that ki u can't expect things from user so u have to handle it accordingly. ( thing from perspective of the user )

// its just a general discussion about how conciously u have to write ur code and handling edge cases as it might effect buisness logic.

/* ********************************************************************************* */

// what if we have to check thr property is exist in particular object or not then we have to use special IN operator.

interface Person {
  name: string;
  age: number;
}

interface AlientPerson {
  name: string;
  age: number;
  address: string;
}

function printAlienAddress(entity: Person | AlientPerson) {
  if ("address" in entity) {
    console.log(entity.address);
  }
}

// now its clear ki address present in entity of alient person and now u can print his address with entity.address.

/* ********************************************************************************* */

type Fish = { swim: () => void };
type Birdy = { fly: () => void };

function isBirdy(petty: Fish | Birdy): petty is Birdy {
  return (petty as Birdy).fly !== undefined;
}

/* ********************************************************************************* */

// Descriminated Union

// little bit attention seeker topic but u can undesrstand it by following docs.
