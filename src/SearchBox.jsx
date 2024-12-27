import TextField from '@mui/material/TextField';
import './SearchBox.css';
import Button from '@mui/material/Button';
import { useState } from "react";
import React from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "12af718eb0b1e0d248efb33a414ecc8d";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (response.ok) {
                let result = {
                    city: city,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    description: jsonResponse.weather[0].description,
                };
                console.log(result);
                return result;
            } else {
                throw new Error(jsonResponse.message);
            }
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            setError(false);
            updateInfo(newinfo);
        } catch (err) {
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
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists</p>}
            </form>
        </div>
    );
}
