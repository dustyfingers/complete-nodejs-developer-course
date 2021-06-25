<<<<<<< HEAD
const yargs = require("yargs");
const notesHelpers = require("./notes");


// set custom version
yargs.version('1.1.0');

// * add, remove, read, list commands

// add command
yargs.command({
    command: "add",
    describe: "Adds a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        notesHelpers.addNote(argv.title, argv.body);
    }
=======
const chalk = require('chalk'),
  yargs = require('yargs'),
  fs = require('fs'),
  validator = require('validator'),
  note = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note.',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    note.addNote(argv.title, argv.body);
  }
>>>>>>> f5f23aa2e8d242b5d42994fb72335dcbfdc27d0b
});

// remove command
yargs.command({
<<<<<<< HEAD
    command: "remove",
    describe: "Removes a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notesHelpers.removeNote(argv.title);
    }
});

// read single command
yargs.command({
    command: "read",
    describe: "Reads a single note",
    handler: argv => {
        notesHelpers.readNote(argv.title);
    }
})

// read all command
yargs.command({
    command: "list",
    describe: "Lists all notes",
    handler: () => {
        notesHelpers.listNotes();
    }
});


yargs.parse();
=======
  command: 'remove',
  describe: 'Delete an existing note.',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    note.removeNote(argv.title);
  }
});

// list command
yargs.command({
  command: 'list',
  describe: 'Show list of existing notes.',
  handler: () => {
    console.log('Showing list of notes!');
  }
});

// read command
yargs.command({
  command: 'read',
  describe: 'Read an individual note.',
  handler: () => {
    console.log('Reading a note!');
  }
});


yargs.parse();
>>>>>>> f5f23aa2e8d242b5d42994fb72335dcbfdc27d0b
