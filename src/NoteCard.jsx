import React from 'react'

const NoteCard = ({notes, setNotes, note, setNote}) => {
    
    const deleteNote = (val) => {
        setNotes(notes.filter(e => e.id !== val.id))
        console.log("val: ", val)
    }

    const updateNote = (val) => {
        notes.forEach(value => {
            if (value.id === val.id)
                value.note = note
        });

        setNote("")
    }
    
    return (
        <div className="note-main-div">
           {
               notes.map(val => {
                   return(
                       <div key={val.id} className="note-div">
                           <p className="note-para">{val.note}</p>
                           <div className="note-btn-div">
                                <button onClick={() => updateNote(val)} className="note-btn upt-btn">Update</button>
                                <button onClick={() => deleteNote(val)} className="note-btn del-btn">Delete</button>
                            </div>
                       </div>
                   );
               })
           } 
        </div>
    )
}

export default NoteCard
