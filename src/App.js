import React, { useState ,useEffect} from 'react';
import './App.css';
import WeatherEngine from './components/WeatherEngine';

function App() {
  
 

  return (
    <div>
      <div className="text-center heading">
      <h1>Adish's Weather App</h1>
    </div>
    <div className="App">
        <WeatherEngine location="Jalandhar,IND" />
        <WeatherEngine location="Melbourne,AU" />
        <WeatherEngine location="Florida,US" />
        <WeatherEngine location="Cape town" />
        <WeatherEngine location="Shimla" />
      </div>
    </div>
    
  );
}

export default App;
