import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;; // 🔑 Put your API key here

  // Fetch weather info from API
  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      // If the city name is invalid
      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      // Extract only required info
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      };

      console.log(result);
      return result;
    } catch (err) {
      console.error("Error fetching weather info:", err);
      throw err;
    }
  };


  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

 
  const handleSubmit = async (evt) => {
    evt.preventDefault(); 
    try {
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); 
    } catch (err) {
      console.error("Error inside handleSubmit:",err);
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>⚠️ No such place exists!</p>}
      </form>
    </div>
  );
}
