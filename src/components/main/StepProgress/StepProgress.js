import React from 'react'
import styles from './StepProgress.module.css'

export default function StepProgress() {
   return (
  <section>
    
    <div className={styles.stepper__panel}>
      <h1 className={styles.title}>結帳</h1>
      <div className={styles.stepper__container}>

        <div className={styles.step}>
          <div className={styles.circle__container}>1</div>
          <div className={styles.label__container}>寄送地址</div>
        </div>

        <div className={styles.step}>
          <div className={styles.circle__container}>2</div>
          <span className={styles.connect__line}></span>
          <div className={styles.label__container}>運送方式</div>
        </div>
     
        <div className={styles.step}>
          <div className={styles.circle__container}>3</div>
          <span className={styles.connect__line}></span>
          <div className={styles.label__container}>付款資訊</div>
        </div>

      </div>
    </div>
  </section>
 )
}