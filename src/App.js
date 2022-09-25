import React, { useState } from 'react';
import Locations from './components/Locations';

function App() {

  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');

  const api = {
    key: "09dc836f290099621cc439767c9a4f3c",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const newSearch = (event) => {
    if (event.key === 'Enter') {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then(res => res.json)
            .then(result => {
                setWeather(result)
                setSearch('')}
                );
    }
  }
  
  const Weather = () => {

    return (
        <div className='weather-box'>
            <div className='temp'>
                temp
            </div>
            <div className='weather'>
                weather
            </div>
        </div>
    );
  }

  /* const Search = () => {

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
    
  } */

  return (
    <div className='app'>
      <main>
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
        <Locations />
        <Weather />
      </main>
    </div>
  );
}

export default App;
