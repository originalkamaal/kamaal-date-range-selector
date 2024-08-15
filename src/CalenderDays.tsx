import React from 'react'
import styles from './styles.module.css'

const CalendarDays: React.FC = () => {
  const days = [
    [1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31]
  ]

  return (
    <div>
      {days.map((week, weekIndex) => (
        <div key={weekIndex} className={styles.week}>
          {week.map((day, dayIndex) => (
            <div
              key={day}
              className={`${styles.day} ${
                dayIndex === 5 || dayIndex === 6 ? styles.weekendDate : ''
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CalendarDays
