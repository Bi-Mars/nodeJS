const user_name = "Bimarsh";
const userAge = 22;

const user = {
  user_name, //ES6 user_name: user_name,
  age: userAge,
  location: "Lancaster",
};

console.log(user);

//object destructuring
const product = {
  label: "Red label",
  price: 2,
  stock: 201,
  salePrice: undefined,
};

const label = product.label;
const stock = product.stock;

//destruct object and rename variable and give default value
const { label: productlabel, stock: stockQty, rating = 5 } = product;
console.log(productlabel); // --> Red label
console.log(stockQty); // --> 201
console.log(rating); // --> 5

//challenge
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock); //order Red label 201
};
transaction("order", product);
