import React from 'react';
import styles from './styles.module.css';
import MonthSelector from './MonthSelector';
import WeekDays from './WeekDays';
import CalendarDays from './CalenderDays';

const Calendar: React.FC = () => {
  return (
    <section className={styles.calendar}>
      <header className={styles.caption}>
        <MonthSelector type="month" text="January" />
        <MonthSelector type="year" text="2023" />
      </header>
      <main className={styles.calendarBody}>
        <WeekDays />
        <CalendarDays />
      </main>
    </section>
  );
};

export default Calendar;