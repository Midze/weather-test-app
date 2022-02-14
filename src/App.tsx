import React, { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Loader from './components/Loader';
import Notice from './components/Notice';
import WeatherList from './components/WeatherList';
import { useAppDspatch, useAppSelector } from './hooks';
import { fetchWeather } from './store/reducers/ActionCreator';

function App() {
  const dispatch = useAppDspatch();
  const { city, weatherByDay = {}, error, isLoading } = useAppSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeather('batumi'));
  }, []);
  
  const days = Object.keys(weatherByDay);
  const currentWeather = days[0] ? weatherByDay[days[0]] : null; //move to the service
  const weatherByDays = days.map((day, index) => {
    return index < 5 ? <Card key={day} day={day} weatherByDay={weatherByDay[day]}/> : <></>;
  });

  return (
    <div className="App">      
      {error && <Notice>{error}</Notice>}
      {isLoading && <Loader/>}
      {!isLoading && (
        <>  
          {currentWeather && <Header city={city} currentWeather={currentWeather}/>}
          <WeatherList>{weatherByDays}</WeatherList>
        </>
      )}
    </div>
  );
}

export default App;
