const yargs = require('yargs')

//Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding A New Note...')
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
console.log(yargs.argv)
