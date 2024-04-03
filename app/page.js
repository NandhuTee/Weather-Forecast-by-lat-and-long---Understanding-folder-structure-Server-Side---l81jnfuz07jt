'use client';
import React, { useState } from 'react';

const WeatherForecast = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [forecastData, setForecastData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div id="root">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="latitude">Latitude</label>
        <input
          type="text"
          id="latitude"
          className="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          type="text"
          id="longitude"
          className="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button type="submit">Get Forecast</button>
      </form>
      {forecastData && (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature (°C)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {/* Iterate over forecastData to display forecast rows */}
            {/* Replace placeholder data with actual forecast data */}
            {/* Example: */}
            <tr>
              <td>{new Date().toLocaleString()}</td>
              <td>20.5</td>
              <td>Sunny</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WeatherForecast;