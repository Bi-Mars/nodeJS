const chalk = require("chalk");
const { string } = require("yargs");
const yargs = require("yargs");
const notes = require("./note-util");

//create add command
yargs.command({
  command: "addNote",
  builder: {
    title: {
      describe: "Title for the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body for the title",
      demandOption: false,
      type: "string",
    },
  },
  describe: "Add note",
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

//read all notes
yargs.command({
  command: "readNotes",
  describe: "Read all notes",
  handler: () => {
    console.log(notes.getNotes());
  },
});

//delete note
yargs.command({
  command: "deleteNote",
  describe: "Deletes the note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: string,
    },
  },
  handler: (argv) => {
    notes.deleteNote(argv.title);
  },
});

// list Notes command
yargs.command({
  command: "listNotes",
  describe: "List notes' title",
  handler: () => {
    console.log(chalk.green.inverse("!!Your Notes!!"));
    notes.listNotes();
  },
});

// read note
yargs.command({
  command: "readNote",
  describe: "Read note",
  builder: {
    title: {
      describe: "Title to search",
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});
yargs.parse();
