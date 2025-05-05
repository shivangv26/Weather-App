import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import SendIcon from '@mui/icons-material/Send'; 
import { useState } from 'react';
import swal from "sweetalert";
export default function SearchBox({updateinfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false); 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "66e7a89e40193687f48870d098cbbf81";
    let getWeatherInfo = async() => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json(); 
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    } catch (err){
        throw (err);
    }
    }
    let handlechange = (evt) => {
        setCity(evt.target.value);
    }
    let handlesubmit = async(evt) =>{
        try{
        evt.preventDefault();
        let newinfo = await getWeatherInfo();
        updateinfo(newinfo);
        setCity(""); 
    } catch (err){
        setCity("");
        setError(true);
        setTimeout(()=>{
            setError(false)
        },1000);
    }
    }
    return (<div className='SearchBox'> 
        <form onSubmit={handlesubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
        <br />
        <br />
        <Button variant="contained" type='submit' endIcon={<SendIcon /> }>
        Search
      </Button>
      {error && swal("No such place exists!")} 
      </form>
    </div>)
}