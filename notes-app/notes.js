const fs = require('fs');

const getNotes = function () {
  return 'Your future notes...';
}

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  }
}

const removeNote = function (title) {
  const note = loadNotes().filter(note => note.title === title);

}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
}


module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
