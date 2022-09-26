import React, { useState } from 'react';

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
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                setSearch('')
                console.log(weather);}
                );
    }
  }

  
  const createDate = (curDate) => {
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
      "Friday", "Saturday"];
      let months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

      let curDay = days[curDate.getDay()];
      let curMonth = months[curDate.getMonth()];
      let curYear = curDate.getFullYear();
      let date = curDate.getDate();

      return `${curDay} ${curMonth} ${date} ${curYear}`;
  }

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

        {(typeof weather.main != "undefined") ? (
        <div>
          <div className='locations-box'>
            <div className='location'>
                {weather.name}, {weather.sys.country}
            </div>
            <div className='date'>
                {createDate(new Date())}
            </div>
          </div> 
        </div>
        ) : ('')}  

        {(typeof weather.main != "undefined") ? (
        <div>  
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°c
            </div>
            <div className='weather'>
                {weather.weather[0].main}
            </div>
          </div>
        </div>
        ) : ('')} 

      </main>
    </div>
  );
}

export default App;
