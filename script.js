import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        ` 8a371711b6e3aed8a36ae00d0492c768`
      );
      const data = await response.json();
      setWeatherData(data);
    };
    if (cityName !== '') {
      fetchData();
    }
  }, [cityName]);

  const handleSearch = (event) => {
    event.preventDefault();
    setCityName(event.target.elements.city.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <form onSubmit={handleSearch}>
          <input type="text" name="city" placeholder="Enter city name" />
          <button>Search</button>
        </form>
        {weatherData && (
          <div className="weather-box">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <div className="temperature">{weatherData.main.temp}&deg;C</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
