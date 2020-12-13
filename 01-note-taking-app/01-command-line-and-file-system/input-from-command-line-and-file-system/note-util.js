//imports
const fs = require("fs");
const chalk = require("chalk");

//functions

//helper functions
//load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//save note
const saveNote = (notesArray) => {
  const notesJSON = JSON.stringify(notesArray);
  fs.writeFileSync("notes.json", notesJSON);
};

const createNote = () => {
  return {
    title: "",
    body: "",
  };
};
//function to get note from the file
// const getNotes = () => {
//   const notes = loadNotes();
//   return notes;
// };
const getNotes = () => loadNotes();

//add note to the file is title is unique
const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  debugger;
  // if (duplicateNotes.length === 0) {
  if (!duplicateNote) {
    const newNote = createNote();
    newNote.title = title;
    newNote.body = body;
    //push notes into array of notes
    notes.push(newNote);
    // save the note
    saveNote(notes);
    console.log(chalk.green.inverse("Note successfully added"));
  } else {
    console.log(chalk.red.inverse("Note title taken!!!"));
  }
};

//delete note, if exists, from the file
const deleteNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.findIndex((note, index) => note.title === title);
  console.log("index: " + noteFound);
  if (noteFound >= 0) {
    notes.splice(noteFound, 1);
    console.log(chalk.green.inverse("Note deleted"));
  } else {
    console.log(
      chalk.red.inverse("Note does not exist with the title provided by you")
    );
  }

  saveNote(notes);
};

// list all note titles
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.red.bold("Title: ") + chalk.green(note.title));
  });
};

//read note from given title
const readNote = (title) => {
  const notes = loadNotes();
  const myNote = notes.find((note) => {
    return note.title === title;
  });
  if (myNote) {
    console.log(chalk.green.bold("Title: " + myNote.title));
    console.log("Body: " + myNote.body);
  } else {
    console.log(chalk.red.inverse("Note does not exist with provided title"));
  }
};

//exports
module.exports = { getNotes, addNote, deleteNote, listNotes, readNote };

//exports like this
/*
module.exports = {
    getNotes: getNotes,
    addNotes: addNote
}
*/
