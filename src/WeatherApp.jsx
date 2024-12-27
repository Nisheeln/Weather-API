import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import { useState } from "react"
import "./weatherApp.css"
export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        desciption : "smoke",
        feelsLike : 21.36,
        humidity: 40,
        temp : 22.05,
        tempMax : 22.05,
        tempMin : 22.05
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
    );
}