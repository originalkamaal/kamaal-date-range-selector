import React from 'react';
import styles from './styles.module.css';

const WeekDays: React.FC = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className={styles.weekdays}>
      {days.map((day, index) => (
        <div 
          key={index} 
          className={index > 4 ? styles.weekendDay : styles.weekday}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;