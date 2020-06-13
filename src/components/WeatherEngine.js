import WeatherCard from "./WeatherCard/component";
import React, { useState ,useEffect} from 'react';
import { FaSearch } from "react-icons/fa";


const WeatherEngine = ({location}) => {

    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(false);
    let [query,setQuery]=useState("");
    let [weather,setWeather]=useState({
      temp:null,
      city:null,
      condition:null,
      country:null
    });
  
    const getWeather= async (q) =>{
        setQuery("");
        setLoading(true);

        try {
            
            let apiRes=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=2b9106e72f5dd7016069e905f19239cd`);
      let resJSON=await apiRes.json();
      setWeather({
        temp:resJSON.main.temp,
        city:resJSON.name,
        condition:resJSON.weather[0].main,
        country:resJSON.sys.country
    });

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }
  
    
  
    const handleSearch=(e)=>{
      e.preventDefault();
      getWeather(query);
    };
  
    useEffect(()=>{
      getWeather(location);
    },[location]);



    return ( 
         
        <div>
        {!loading && !error ? (
            <div>
                 <form action="">
        <input className="input" value={query} onChange={(e)=>setQuery(e.target.value)} type="text"/>
        <a className="btn" onClick={e=>handleSearch(e)} ><FaSearch className="icon" /></a>
      </form>
      <WeatherCard query={query} city={weather.city} country={weather.country}  temp={weather.temp} condition={weather.condition} />
            </div>
        ) : loading? (<div>Loading</div>)
    
    :!loading && error ? (<div className="error"> <button className="reset" onClick={()=>setError(false)}>RESET</button>
      <WeatherCard city='Not Available' country='Please Try Again'  temp='' condition='' />
    </div>):null}
      </div>
    );
}
 
export default WeatherEngine;