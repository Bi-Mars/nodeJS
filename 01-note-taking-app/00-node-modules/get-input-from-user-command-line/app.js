//imports
//functions
//exports

const chalk = require("chalk");

console.log(process.argv);

const command = process.argv[2];

if (command === "add") {
  console.log("Adding Note!");
} else if (command === "remove") {
  console.log("Removing Note!");
}

//node app.js add --title="This is my title"
