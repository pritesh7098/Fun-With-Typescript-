// Type aliases

type userDetails = {
  name: string;
  gender: string;
  isAdult: boolean;
};

function fetchUserDetails(user: userDetails) {
  return user;
}

fetchUserDetails({ name: "pritesh", gender: "male", isAdult: true });

// Readonly properties in ts and the ? which is dedicated to is Required.

type mama = {
  readonly _id;
  name: string;
  gender: string;
  isAdult: boolean;
};

var fetching = {
  _id: 13,

  name: "pritesh",
  gender: "male",
  isAdult: true,
};

fetching._id = 2;

// scenrio based thingy
// i know its awkward example here but when there are types define already and we just have to add another  type alias then we can use it with & type alias here.

type gulabjam = {
  brand: string;
};

type rasgulla = {
  brand: string;
};

type recipee = gulabjam &
  rasgulla & {
    recipeeTheory: string;
  };

export {};
