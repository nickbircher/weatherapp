import React, { useState } from 'react';

/*
Component consisting of:
Search box containing a search bar which:
allows for user input of a city and then:
does something with the search
*/
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
        />
    </div>
    );
    
}

export default Search;