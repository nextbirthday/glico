import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import styles from './formMessage.module.css'

type PropsType = {
  msg: string
  icon?: React.ReactElement // Add the icon prop
}

const FormMessage = ({ msg, icon }: PropsType) => {
  return (
    <div className={styles.messageContainer}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <small className={styles.alert}>{msg}</small>
    </div>
  )
}

export default FormMessage
