import React, { useState } from 'react'
import Note from './Components/Note'
import axios from 'axios'
import noteService from './services/notes'
import Notification from './Components/Notification'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
  }

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2019</em>
    </div> 
  )
}

const App = (props) => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('some error happened')


    const hook = () => {
      console.log('effect')
      axios
        .get('http://localhost:3001/notes')
        .then(response => {
          console.log('promise fulfilled')
          setNotes(response.data)
        })
    }
    
    useEffect(() => {
      noteService
        .getAll()
          .then(initialNotes => {
          setNotes(initialNotes)
        })
    }, [])
  
    const toggleImportanceOf = id => {
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }
    
      noteService
        .update(id, changedNote).then(returnedNote => {
          setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
        .catch(error => {
          alert(
            `the note '${note.content}' was already deleted from server`
          )
          setTimeout(()=>{
            setErrorMessage(null)
          }, 5000)
          setNotes(notes.filter(n => n.id !== id))
        })
    }
  
    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() > 0.5
      }
  
      noteService
        .create(noteObject)
          .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
          setNewNote('')
        })
    }
  
  

  return (
    <div>
      <h1>Notes</h1>

      <Notification message={errorMessage} />
      
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {rows()}
      </ul>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">show</button>
      </form>   
      <Footer />    
    </div>
  )
  
}

export default App