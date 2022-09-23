/* import React, { useState } from 'react';
import { newSearch } from './Weather';


Component consisting of:
Search box containing a search bar which:
allows for user input of a city and then:
does something with the search

const Search = () => {

    const [search, setSearch] = useState('');

    const handleChange = (data) => {
        setSearch(data);
    }
    
    return (
    <div className='search-box'>
        <input
        className='search-bar'
        type='text'
        placeholder='Search Cities'
        onChange={e => setSearch(e.target.value)}
        value={search}
        onKeyPress={newSearch}
        />
    </div>
    );
    
}

export default Search; */