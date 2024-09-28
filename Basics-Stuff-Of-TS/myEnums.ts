// enums in ts :
// enums are simple used when we have multiple choices like in ecommerce payment choice, selecting a seat in movie theter etc, so in that case using enums rather than other thingy is preferred.

enum choiceType {
  CREDIT_CARD = "card",
  DEBIT_CARD = "card",
  PAYPAL = "payment",
}

const myPaymentType = choiceType.CREDIT_CARD;

enum coloChoice {
  RED,
  GREEN,
  BLUE,
}

var myColor: coloChoice.RED;

// above are just an demo examples of enum u can use it in diffrent use cases.

//enums in functions

function payMe(amount: number, choiceType: choiceType) {
  console.log(`Paying ${amount} using ${choiceType}`);
}

payMe(100, choiceType.PAYPAL);
