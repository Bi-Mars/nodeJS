//imports
const chalk = require("chalk");
const yargs = require("yargs");

//node argument-parsing-with-yargs.js add --title="My note"
console.log(process.argv);
console.log(yargs.argv);

//customize yargs version
yargs("1.1.0");
