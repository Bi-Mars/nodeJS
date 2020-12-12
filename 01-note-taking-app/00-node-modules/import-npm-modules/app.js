const validator = require("validator");
const chalk = require("chalk");

console.log(validator.isEmail("bimarsh@example.com"));
console.log(validator.isURL("https//bimarsh.com"));
console.log(chalk.green("Success!"));
console.log(chalk.red("Fail!"));

const comboChalk = chalk.bold.italic.cyan.underline;
console.log(comboChalk("Hats off for higher order function"));
