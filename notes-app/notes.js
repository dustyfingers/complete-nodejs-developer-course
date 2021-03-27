const fs = require("fs");
const chalk = require("chalk");


const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes!"));

    notes.forEach(note => console.log(chalk.green.inverse(note.title)));
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    // ! node debugger example!
    debugger;

    if (!duplicateNote) {
        notes.push({title, body});
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else console.log(chalk.red.inverse("Note title already taken."));

    debugger;
}

const removeNote = title => {
    const notes = loadNotes();
    const amendedNotes = notes.filter(note => note.title !== title);

    notes.length > amendedNotes.length ? 
        console.log(chalk.green.inverse("Note removed!")) : console.log(chalk.red.inverse("No note found."));

    saveNotes(amendedNotes);
}

const readNote = title => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title);

    if (foundNote) {
        console.log(chalk.green.inverse("Note found!"));
        console.log(chalk.inverse(`Title:  ${foundNote.title}`));
        console.log(`Body:  ${foundNote.body}`);
    } else console.log(chalk.red.inverse("No note found."));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
} 

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    listNotes,
    addNote,
    removeNote,
    readNote
};