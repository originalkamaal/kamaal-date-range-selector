import React from 'react'
import styles from './styles.module.css'

interface MonthSelectorProps {
  type: 'month' | 'year'
  text: string
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ text }) => {
  return (
    <div className={styles.month}>
      <img
        loading='lazy'
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/88dc705e7115299864c9eaa1828f720e52a02b66165d16cbd9da784fb856e035?placeholderIfAbsent=true&apiKey=88c271649371414ea4fa69159d3e6554'
        className={styles.arrowIcon}
        alt=''
      />
      <div className={styles.monthText}>{text}</div>
      <img
        loading='lazy'
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/e62a2f0dfe32fef272f88a4628802b0ead234b8276035d9390952bebe29b3f20?placeholderIfAbsent=true&apiKey=88c271649371414ea4fa69159d3e6554'
        className={styles.arrowIcon}
        alt=''
      />
    </div>
  )
}

export default MonthSelector
