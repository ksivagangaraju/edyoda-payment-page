import './index.css'

const SubscriptionPlan = props => {
    const {itemId, isChecked, offerDate, months, yearPlan, monthPlan, lowPriceRecommended} = props
    const isExpired = new Date(offerDate).toLocaleDateString() >= new Date().toLocaleDateString()
    return (
        <div className={`subscription-plan-container ${!isExpired ? 'expired-subscription-plan-container' : ''} ${isChecked ? 'selected-plan-container' : 'not-selected-plan-container'}`}>
            {isExpired ?
                <p className={`recommended ${lowPriceRecommended !== monthPlan ? 'hide-display' : ''} `}>Recommended</p> :
                <p className={'recommended expired'}>Expired</p>
            }
            <div className="subscription-plan-amount">
                <input id={`subscription${itemId}`} type="radio" name="subscription" value={itemId} defaultChecked={isChecked} disabled={!isExpired} />
                <label htmlFor={`subscription${itemId}`}>
                    <div className="month-subscription-container">
                        {!isExpired ? 
                            <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1685190871/Radio_Buttonselect_iojedp.png' alt="select subcription" className="select-icon" /> :
                            isChecked ?
                                <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1685190872/Vectorselected_qjumwa.png' alt="select subcription" className="select-icon" /> :
                                <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1685190871/VectornotSelected_nftyou.png' alt="select subcription" className="select-icon" />
                        }
                        
                        <p className="month-subscription">{months} Months Subscription</p>
                    </div>
                    <div className="month-total-amount-container">
                        <p className="month-amount">Total <span className="amount">{Intl.NumberFormat("en-IN", { style: "currency", currency: "INR"}).format(yearPlan).replace('.00', '')}</span></p>
                        <p className="month-amount">{Intl.NumberFormat("en-IN", { style: "currency", currency: "INR"}).format(monthPlan).replace('.00', '')} <span className="month">/mo</span></p>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default SubscriptionPlan