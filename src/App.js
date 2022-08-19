import './App.css';
import React from 'react';

const api = {
  key: "09dc836f290099621cc439767c9a4f3c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-bar'>
          <input
            className='search-bar'
            type='text'
            placeholder='Search Cities'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
