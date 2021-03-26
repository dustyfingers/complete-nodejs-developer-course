const yargs = require("yargs");
const notesHelpers = require("./notes.js");


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
    handler: function(argv) {
        notesHelpers.addNote(argv.title, argv.body);
    }
});

// remove command
yargs.command({
    command: "remove",
    describe: "Removes a note",
    handler: function() {
        console.log("removing a note...");
    }
});

// read single command
yargs.command({
    command: "read",
    describe: "Reads a single note",
    handler: function() {
        console.log("reading a single note.");
    }
})

// read multiple command
yargs.command({
    command: "list",
    describe: "Lists all notes",
    handler: function() {
        console.log("listing out all of the notes!");
    }
});


yargs.parse();
