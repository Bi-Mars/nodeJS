const greeter = (name) => {
  console.log(`Hello ${name}`);
};

greeter("Bimarsh");
//when parameter (input) is not provided
greeter(); // returns undefined

console.log(
  "----------------------------------------------------------------------------------"
);
const greeter__set_default_value = (name = "User") => {
  console.log(`Hello ${name}`);
};

greeter__set_default_value("Bimarsh"); // returns "Hello Bimarsh"
//when parameter (input) is not provided
greeter__set_default_value(); // returns "Hello user"

console.log(
  "----------------------------------------------------------------------------------"
);
// Destructuring Object
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};
// transaction("order"); // throws error

const transaction_set_default_value = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};
transaction_set_default_value("order"); // "order undefined undefined"
