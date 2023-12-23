import "./WeatherApp.css";

import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import humidity_icon from "../assets/humidity_icon.png";
import wind_icon from "../assets/wind_icon.png";
import { useState } from "react";
import axios from "axios";

const WeatherApp = () => {

    const API_KEY = "dd94f859a0e52d6e4767fddf735f04a7"

    const [city, setCity] = useState("Pune")
    const [search, setSearch] = useState("")
    const [temp, setTemp] = useState(20)
    const [humudity, setHumudity] = useState(64)
    const [wind, setWind] = useState(2)

    const handSearch = () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=dd94f859a0e52d6e4767fddf735f04a7`

        if(search === ""){
            return 0;
        }
        
        axios.get(url).then(res => {
            console.log(res.data)
            setCity(search)
            setTemp(Math.floor(res.data.main.temp))
            setHumudity(Math.floor(res.data.main.humidity))
            setWind(Math.floor(res.data.wind.speed))
        })
    }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search"
        onChange={(e) => setSearch(e.target.value)} />
        <div className="search-icon">
          <img src={search_icon} alt="" onClick={handSearch} />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">{temp} °C</div>
      <div className="weather-location">{city}</div>
      <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
                <div className="humudity-percent">{humudity}%</div>
                <div className="text">Humudity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
                <div className="humudity-percent">{wind} km/h</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
