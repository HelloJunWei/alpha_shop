import React from 'react'
import styles from './DeliverAddress.module.css'


export default function DeliverAddress() {
  return (
    <section>
      
      <div className={styles.DeliverAddress__panel}>
      <h2>寄送地址</h2>
      <div className={styles.form__row}>
       <div className={styles.title__part}>
        <label>稱謂</label>
        <select>
        <option value={styles.man}>先生</option>  
        <option value={styles.woman}>女士</option>  
        </select>
        </div>
        <div className={styles.name__part}>
        <label className={styles.name}>姓名</label>
        <input id={styles.input__name} placeholder='請輸入姓名'></input>
        </div>
        </div>

        <div className={styles.form__row}>
        <div className={styles.telphone__part}>
        <label>電話</label>
        <input id={styles.input__telphone} placeholder='請輸入行動電話'></input>
        </div>
        <div className={styles.email__part}>
        <label className={styles.email}>Email</label>
        <input id={styles.input__email} placeholder='請輸入電子郵件'></input>
        </div>
        </div>

        <div className={styles.form__row}>
        <div className={styles.address__part}>
        <label>縣市</label>
        <select>
          <option value="" disabled selected>請選擇縣市</option>
          <option value="">台北市</option>
          <option value="">新北市</option>
          <option value="">桃園市</option>
          <option value="">台中市</option>
          <option value="">台南市</option>
          <option value="">高雄市</option>
        </select>
        </div>
        <div className={styles.address__part}>
        <label className={styles.address}>地址</label>
        <input id={styles.input__address} placeholder='請輸入地址'></input>
        </div>
        </div>

      </div>
    </section>
  )
}