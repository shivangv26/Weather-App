import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox" 
import { useState } from "react";
export default function WeatherApp(){
    const [weather,setWeather] = useState({
        city:"Kanpur",
        temp: 25.05 ,
        tempMin: 25.05 ,
        tempMax: 25.05 ,
        humidity: 47 ,
        feelsLike : 24.84,
        weather: "haze" ,
    });
    let updateinfo = (newinfo) => {
        setWeather(newinfo);
    }
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Weather App</h2>
            <SearchBox updateinfo={updateinfo}/> 
            <InfoBox info = {weather}/> 
        </div>
    )
}