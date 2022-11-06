import React from 'react'
import StepProgress from './StepProgress/StepProgress'
import DeliverAddress from './DeliverAddress/DeliverAddress'
import ShppingMethod from './ShppingMethod/ShppingMethod'
import PaymentInformation from './PaymentInformation/PaymentInformation'
import ProgressControl from './ProgressControl/ProgressControl'
import styles from './Main.module.css'

export default function Main() {
  return (
    <div>
      <div className={styles.container}>
      <StepProgress />
      <DeliverAddress />
      <ShppingMethod />
      <PaymentInformation />
      <ProgressControl />
      </div>
    </div>
  )
}