import React from 'react';
import cn from 'classnames';
import styles from './Characterstic.module.css';

interface CharacteristicProps {
  size: string;
  name?: string;
  value: number;
  unit: string;
  className?: string;
}

const Characteristic: React.FC<CharacteristicProps> = ({size, name, value, unit, className}) => {
  return (
    <div className={cn(styles.characterstic, className, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.l]: size === 'l',
      [styles.xl]: size === 'xl',
    })}>        
      {name && <div className={cn(styles.name)}>{name}:</div>}
      <div className={cn(styles.value)}>{value}</div>
      <div className={cn(styles.unit, {
        [styles.top]: unit === '°',
      })}>{unit}</div>
    </div>
  );
};

export default Characteristic;