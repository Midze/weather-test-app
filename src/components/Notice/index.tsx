import React, { ReactNode, useState } from 'react';
import cn from 'classnames';
import { useAppDspatch } from '../../hooks';
import { clearError } from '../../store/reducers/WeatherSlice';
import styles from './Notice.module.css';


interface NoticeProps {
  children: ReactNode;
}

const Notice: React.FC<NoticeProps> = ({children}) => {
  const [isActive, setIsActive] = useState(true);
  const dispatch = useAppDspatch();
  const closeNotice = () => {
    setIsActive(false);
    setTimeout(() => {
      dispatch(clearError());
    }, 1000);
  };

  return (
    <div className={cn(styles.notice, {
      [styles.hide]: !isActive,
    })} onClick={closeNotice}>
      Warning:{children}
    </div>
  );
};

export default Notice;