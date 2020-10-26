import React from 'react';
import '../styles/searchBox.css'

function SearchBox() {
    return (
        <div className='search_container'>
            <h1>Search Box</h1>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' />
        </div>
    )
}

export default SearchBox
