const fs = require('fs')
const chalk = require('chalk')
const getNotes =  (title, body) => {


}

const addNOtes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title )

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log('new note added')
    } else {
        console.log('Note title Taken')
    }
}

const removeNote =  (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Notes Removed'))
        saveNotes(notesToKeep)
    }else {
        console.log(chalk.red.inverse('no note found'))
    }

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(chalk.green.inverse(note.title))
    })
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNOtes,
    removeNote: removeNote,
    listNotes:listNotes
}