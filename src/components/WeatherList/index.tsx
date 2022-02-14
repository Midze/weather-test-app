import React, { ReactNode } from 'react';
import './styles.css';

interface WeatherListProps {
  children?: ReactNode;
}

const WeatherList: React.FC<WeatherListProps> = ({children}) => {
  return (
    <div className='weather__list'>{children}</div>
  );
};

export default WeatherList;