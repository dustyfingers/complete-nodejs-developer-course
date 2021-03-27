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
});

// remove command
yargs.command({
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