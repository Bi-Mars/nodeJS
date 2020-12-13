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

yargs.parse();
