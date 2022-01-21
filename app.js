const yargs = require('yargs')
const note = require('./note.js')
const notes = require('./note.js')
//Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    note.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Removing a note..',
  handler: function () {
    console.log('Removing the note..')
  },
})

yargs.command({
  command: 'list',
  describe: 'Listing Note',
  handler: function () {
    console.log('Listing all note..')
  },
})

yargs.command({
  command: 'read',
  describe: 'Read a Note',
  handler: function () {
    console.log('Reading a note')
  },
})
// console.log(yargs.argv)
yargs.parse()
