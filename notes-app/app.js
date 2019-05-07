const chalk = require('chalk'),
      yargs = require('yargs'),
      fs = require('fs'),
      validator = require('validator'),
      getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0') ;

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
    console.log('Title: ' + argv.title);
    console.log('Body: \n' + argv.body);
  }
});

// remove command
yargs.command({
  command: 'remove',
  describe: 'Delete an existing note.',
  handler: () => {
    console.log('Removing a note.');
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
