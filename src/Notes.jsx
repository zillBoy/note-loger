import React, { useState } from 'react'
import NoteCard from './NoteCard'
import Search from './Search'

function Notes() {
    
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])
    const [count, setCount] = useState(1)

    const addNote = () => {
        setNotes([...notes, {id: count, note: note}])
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1 className="heading">NOTES LOGER</h1>
            <div className="notes-src-btn-div">
                <Search note={note} setNote={setNote} />    
                <button className="btn" onClick={addNote}>Add Note</button>
            </div>

            {notes.length !== 0 ? <NoteCard 
                notes={notes}
                setNotes={setNotes}
                note={note}
                setNote={setNote}
             /> : null}
        </div>
    )
}

export default Notes