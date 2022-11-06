import React from 'react'
import styles from './ProgressControl.module.css'

export default function ProgressControl() {
  return (
    <section>
      <div id="btn__control" className={styles.control__panel}>
        <div className={styles.line}></div>
        <div className={styles.button__area}>
       <button className={styles.btn__previous}>←　上一步</button>
       <button className={styles.btn__next}>下一步　→</button>
       <button className={styles.btn__order}>確認下單</button>
       </div>
      </div>
    </section>
  )
}