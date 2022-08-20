import React from 'react';
import Search from './components/Search';
import Locations from './components/Locations';
import Weather from './components/Weather';

const api = {
  key: "09dc836f290099621cc439767c9a4f3c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className='app'>
      <main>
        <Search />
        <Locations />
        <Weather />
      </main>
    </div>
  );
}

export default App;
