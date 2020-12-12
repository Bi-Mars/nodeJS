const chalk = require("chalk");
const yargs = require("yargs");

// CRUD operation on note using command line
//create add command
//command: node note-app-get-user-input-command-line.js add --title="My title" --body="my body"
yargs.command({
  command: "add", // name of the command,
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // is this required?
      type: "string", // what type of value?
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  describe: "Add new note", // description of the command
  handler: (argv) => {
    // function to run, when "add" command is entered
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove note",
  handler: function () {
    console.log("Removing note");
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "list out notes",
  handler: function () {
    console.log("Listing notes");
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "read the note",
  handler: function () {
    console.log("Reading node");
  },
});

yargs.parse();
