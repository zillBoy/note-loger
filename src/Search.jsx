import React from 'react'

const Search = ({note, setNote}) => {
    return(
        <div className="search-input-div">
            <input className="search-input" placeholder="Add note" type="text" value={note} onChange={e => setNote(e.target.value)}/>
        </div>
    );
}

export default Search