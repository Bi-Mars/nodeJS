//imports
const fs = require("fs");

//functions
//function to get note from the file
const getNotes = () => {
  const notes = loadNotes();
  return notes;
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    const newNote = createNote();
    newNote.title = title;
    newNote.body = body;
    //push notes into array of notes
    notes.push(newNote);
    // save the note
    saveNote(notes);
  } else {
    console.log("Note title taken!!!");
  }
};

const deleteNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.findIndex((note, index) => note.title === title);
  console.log("index: " + noteFound);
  if (noteFound >= 0) {
    notes.splice(noteFound, 1);
    console.log("Note deleted");
  } else {
    console.log("Note does not exist with the title provided by you");
  }
  saveNote(notes);
};

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

//exports
module.exports = { getNotes, addNote, deleteNote };

//exports like this
/*
module.exports = {
    getNotes: getNotes,
    addNotes: addNote
}
*/
