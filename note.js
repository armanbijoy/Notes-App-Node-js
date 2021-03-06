const fs = require('fs')
const getNotes = function () {
  return 'Your Notes'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const dupliacteNotes = notes.filter(function (note) {
    return note.title === title
  })

  if (dupliacteNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
  } else {
    console.log('Note Title taken')
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
}
