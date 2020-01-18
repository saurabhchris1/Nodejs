const notes = require('./notes')
const chalk = require('chalk')
const fs = require('fs')
const yargs = require('yargs')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

// carete remove command

yargs.command(
    {
        command: 'remove',
        describe: 'Remove note',
        builder:{
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.removeNote(argv.title)
        }
    }
)

yargs.command({
    command:'read',
    describe: 'Read the notes',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function () {
        notes.listNotes()
    }
})



console.log(yargs.argv)

