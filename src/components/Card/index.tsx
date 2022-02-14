import React from 'react';
import moment from 'moment';
import { WeatherByDay } from '../../models/Weather';
import Description from '../Description';
import './styles.css';

interface CardProps {
  day: string;
  weatherByDay: WeatherByDay;
}

const Card: React.FC<CardProps> = ({ day, weatherByDay }) => {
  
  return (
    <div className='weather__day'>
      <div className='weather__day-title'>{moment(day).format('DD MMMM')}</div>
      {Object.keys(weatherByDay).map((time) => {
        return (
          <Description  key={`${day}_${time}`} time={time} dayWeather={weatherByDay[time]}/>
        );
      })}
    </div>
  );
};

export default Card;