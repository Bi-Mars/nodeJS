const fileSystem = require("fs") // built-in core module


fileSystem.writeFileSync("notes.txt", "This file was created by Node.js. My name is Bimarsh. ");

// Append message to notes.text
fileSystem.appendFileSync("notes.txt", "I am appending this string");