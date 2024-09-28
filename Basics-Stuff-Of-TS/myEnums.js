// enums in ts :
// enums are simple used when we have multiple choices like in ecommerce payment choice, selecting a seat in movie theter etc, so in that case using enums rather than other thingy is preferred.
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["CREDIT_CARD"] = 0] = "CREDIT_CARD";
    PaymentType[PaymentType["DEBIT_CARD"] = 1] = "DEBIT_CARD";
    PaymentType[PaymentType["PAYPAL"] = 2] = "PAYPAL";
})(PaymentType || (PaymentType = {}));
var myPaymentMethod;
// or you can use it like this
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var myColor = Color.RED;
// above are just an demo examples of enum u can use it in diffrent use cases.
//enums in functions
function pay(amount, paymentType) {
    console.log("Paying ".concat(amount, " using ").concat(paymentType));
}
pay(100, PaymentType.PAYPAL);
