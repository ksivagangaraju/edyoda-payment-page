import {useState} from 'react'
import SubscriptionPlan from '../SubscriptionPlan'
import './index.css'

const monthPlansList = [
    {
        id: 1,
        months: 12,
        offerLastMonth: '25-May-2023',
        totalAmount: 99,
        scholarship: 18500
    },
    {
        id: 2,
        months: 12,
        offerLastMonth: '30-June-2023',
        totalAmount: 179,
        scholarship: 18500
    },
    {
        id: 3,
        months: 6,
        offerLastMonth: '31-July-2023',
        totalAmount: 149,
        scholarship: 18500
    },
    {
        id: 4,
        months: 3,
        offerLastMonth: '31-August-2023',
        totalAmount: 99,
        scholarship: 18500
    }
]

const lowPriceRecommended = Math.min(...monthPlansList.map(item => new Date(item.offerLastMonth).toLocaleDateString() >= new Date().toLocaleDateString() ? Number((item.totalAmount / item.months).toFixed(0)) : item.totalAmount))

const Subscription = () => {
    const [selectedPlan, setSelectedPlan] = useState(monthPlansList.find(item => Number((item.totalAmount / item.months).toFixed(0)) === lowPriceRecommended).id)
    const selectSubscriptionPlan = event => {
        setSelectedPlan(Number(event.target.value))
    }
    const validDate = monthPlansList.find(item => item.id === selectedPlan).offerLastMonth
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const nth = function(d) {
        if (d > 3 && d < 21) return 'th'
        switch (d % 10) {
            case 1:  return "st"
            case 2:  return "nd"
            case 3:  return "rd"
            default: return "th"
        }
    }
    const monthString = `${new Date(validDate).getDate()}${nth(new Date(validDate).getDate())} ${monthNames[new Date(validDate).getMonth()]} ${new Date(validDate).getFullYear()}`
    const selectedSubscriptionPlan = Math.ceil(((monthPlansList.find(item => item.id === selectedPlan).totalAmount / 2) / 100) * 10 + (monthPlansList.find(item => item.id === selectedPlan).totalAmount / 2))
    const discount = new Date(validDate).toLocaleDateString() >= new Date().toLocaleDateString() ? -(monthPlansList.find(item => item.id === selectedPlan).scholarship - selectedSubscriptionPlan) : monthPlansList.find(item => item.id === selectedPlan).scholarship
    const totalAmountWithGST = Intl.NumberFormat("en-IN", { style: "currency", currency: "INR"}).format((((selectedSubscriptionPlan / 100) * 50) + selectedSubscriptionPlan).toFixed(0)).replace('.00', '')
    return (
        <div className="subscription-container">
            <div className="signup-and-subscribe-container">
                <div className="signup-subscribe">
                    <div className="number">1</div>
                    <p className="signup">Sign Up</p>
                </div>
                <div className="signup-subscribe">
                    <div className="number">2</div>
                    <p className="signup">subscribe</p>
                </div>
            </div>
            <p className="subscribe-plan">Select your subcription plan</p>
            <form onChange={selectSubscriptionPlan}>
                {monthPlansList.map(item => (
                    <SubscriptionPlan key={item.id} isChecked={selectedPlan === item.id} itemId={item.id} offerDate={item.offerLastMonth} months={item.months} yearPlan={item.totalAmount} monthPlan={Number((item.totalAmount / item.months).toFixed(0))} lowPriceRecommended={lowPriceRecommended}/>
                ))}
            </form>
            <hr className="hr-line" />
            <div className="subscription-fee-container">
                <p className="signup">Scholarship</p>
                <p className="amount" style={{margin: 0, fontFamily: 'Roboto', color: '#3C4852'}}>{Intl.NumberFormat("en-IN", { style: "currency", currency: "INR"}).format(monthPlansList.find(item => item.id === selectedPlan).scholarship.toFixed(0)).replace('.00', '')}</p>
            </div>
            <div className="limited-time-offer-container">
                <div>
                    <p className="limited-time-offer-text">Limited time offer</p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1685195654/Vectorlimited_pg73gy.png' alt='limited time' className='select-icon' />
                        <p className="offer-valid-text">Offer valid till {monthString} </p>
                    </div>
                </div>
                <p className="amount" style={{margin: 0, fontFamily: 'Roboto', color: '#3C4852'}}>{Intl.NumberFormat("en-IN", { style: "currency", currency: "INR"}).format(discount.toFixed(0)).replace('.00', '')}</p>
            </div>
            <div className="subscription-fee-container">
                <p className="signup"><span className="month-subscription" style={{margin: 0}}>Total</span> (Incl. of 18% GST)</p>
                <p className="amount" style={{margin: 0, fontFamily: 'Roboto', color: '#3C4852', fontSize: 24}}>{totalAmountWithGST.toLocaleString()}</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button type='button' className="cancel-button">CANCEL</button>
                <button type='button' className="proceed-button">PROCEED TO PAY</button>
            </div>
        </div>
    )
}

export default Subscription