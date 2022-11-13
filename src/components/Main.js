import React from 'react'
import StepProgress from './StepProgress/StepProgress'
import DeliverAddress from './DeliverAddress/DeliverAddress'
import ShppingMethod from './ShppingMethod/ShppingMethod'
import PaymentInformation from './PaymentInformation/PaymentInformation'
import ProgressControl from './ProgressControl/ProgressControl'
import './Main.css'
import Cart from './Cart/Cart'

export default function Main() {
  return (
     <div>
      <main className="site-main">
        <div className="main-container">
          {/* 結帳區 */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase="1"
            data-total-price="0">
            <StepProgress />
            <DeliverAddress />
            <ShppingMethod />
            <PaymentInformation />
            <ProgressControl />
          </section>
          {/* 購物車區*/}
            <Cart />
        </div>
      </main>
    </div>
  )
}