import React from 'react';
import { City, WeatherByDay } from '../../models/Weather';
import cn from 'classnames';
import Characteristic from '../Сharacteristic';
import styles from  './Header.module.css';

interface HeaderProps {
  city: City;
  currentWeather: WeatherByDay;
}

const Header: React.FC<HeaderProps> = ({city, currentWeather}) => {
  const { name, } = city;
  const currentTimeWeather = Object.keys(currentWeather)[0];
  const todaysWeather = currentWeather[currentTimeWeather];
  const {
    weather,
    temp,
    temp_max,
    temp_min,
    humidity
  } = todaysWeather;
  const imageName = weather?.icon;

  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles.title)}>{name}</div>
      <Characteristic className={cn(styles.temp)} size='l' value={temp} unit='°'/>
      <img className={cn('weather-image', styles.image)} src={`http://openweathermap.org/img/wn/${imageName}@2x.png`} alt={weather?.description} />
      <div className={cn(styles.desc)}>{weather?.description}</div>
      <Characteristic className={cn(styles.char)} size='s' name='Max' value={temp_max} unit='°'/>
      <Characteristic className={cn(styles.char)} size='s' name='Min' value={temp_min} unit='°'/>
      <Characteristic className={cn(styles.char)} size='m' name='Hummidity' value={humidity} unit='%'/>
    </div>
  );
};

export default Header;