import React from 'react';
import { DayWeather } from '../../models/Weather';
import Characteristic from '../Сharacteristic';
import './styles.css';

interface DescriptionProps {
  time: string;
  dayWeather: DayWeather;
}

const Description: React.FC<DescriptionProps> = ({time, dayWeather}) => {
  const {
    weather,
    temp,
    temp_max,
    temp_min,
    pressure,
    humidity
  } = dayWeather;
  const imageName = weather?.icon;
  return (
    <div className='weather-description'>
      <div className="weather-time-block">
        <img className='weather-image' src={`http://openweathermap.org/img/wn/${imageName}@2x.png`} alt={weather?.description} />
        <span className='weather-time'>{time}</span>
      </div>
      <Characteristic className='weather-temp' size='xl' value={temp} unit='°'/>
      <div className="weather-stats">
        <Characteristic size='s' name='Max' value={temp_max} unit='°'/>
        <Characteristic size='s' name='Min' value={temp_min} unit='°'/>
        <Characteristic className='w-100' size='m' name='Pressure' value={pressure} unit='hPa'/>
        <Characteristic className='w-100' size='m' name='Hummidity' value={humidity} unit='%'/>
      </div>
    </div>
  );
};

export default Description;