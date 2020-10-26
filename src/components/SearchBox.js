import React from 'react';
import '../styles/searchBox.css';
import {robots} from '../robots'

function SearchBox({ setRobots, searchInput, setSearchInput}) {

    const handleChange=(event)=>{
        event.preventDefault();
        setSearchInput(event.target.value)
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchInput.toLowerCase())
        });
        setRobots(filteredRobots)
        
    }

    return (
        <div className='search_container'>
            <h1>Search Box</h1>
            <input 
            onChange={(e)=>{
                handleChange(e)
            }}
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' />
        </div>
    )
}

export default SearchBox
