'use client'
import { useState } from "react";

const API_BASE_URL = 'https://api.met.no/weatherapi/locationforecast/2.0/compact'

export default function Home() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherForcastData, setWeatherForcastData] = useState([]);
  async function getWeatherData(e){
    e.preventDefault();
    try{
      const response = await fetch(`${API_BASE_URL}?lat=${latitude}&lon=${longitude}`);
      const weatherData = await response.json();
      setWeatherForcastData(weatherData?.properties?.timeseries?.slice(0,30))
    }
    catch(err){
      console.error(err)
    }
  }
  return (
    <>
      <div id="root">
        <h1>Weather Forecast</h1>
        <form onSubmit={getWeatherData}>
          <label>Latitude:
          <input type="text" className="latitude" value={latitude} onChange={(e)=>setLatitude(e.target.value)}/>


          </label>

          <label>Longitude:
          <input type="text" className="longitude" value={longitude} onChange={(e)=>setLongitude(e.target.value)}/>


          </label>

          <button type="submit">Get Forecast</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature (°C)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {weatherForcastData.map((weatherEntry)=>{
            return(
              <tr key={weatherEntry.time}>
                <td>{new Date(weatherEntry.time).toLocaleString()}</td>
                <td>{weatherEntry?.data?.instant?.details?.air_temperature.toFixed(1)}</td>

                <td>{weatherEntry?.data?.next_1_hours?.summary?.symbol_code}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}