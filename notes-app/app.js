const chalk = require('chalk'),
      yargs = require('yargs'),
      validator = require('validator'),
      getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0') ;

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note.',
  handler: () => {
    console.log('Adding a new note!');
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


console.log(process.argv);
console.log(yargs.argv);
