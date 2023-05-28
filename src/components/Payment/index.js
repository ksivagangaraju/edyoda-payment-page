import Subscription from '../Subscription'
import './index.css'

const courseDetailsList = [
    {
        id: 1,
        icon: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685183215/Icon1_dyp56a.png',
        detail: "<span style='color:#0096FF'>100+</span> Job relevant courses"
    },
    {
        id: 2,
        icon: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685183216/Icon2_gp0rao.png',
        detail: "<span style='color:#0096FF'>20,000+</span> Hours of content"
    },
    {
        id: 3,
        icon: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685183214/Icon3_ruiqso.png',
        detail: "<span style='color:#0096FF'>Exclusive</span> webinar access"
    },
    {
        id: 4,
        icon: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685183213/Icon4_rsfvlt.png',
        detail: "Scholarship worth <span style='color:#0096FF'>₹94,500</span>"
    },
    {
        id: 5,
        icon: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685183212/Icon5_iwkhqe.png',
        detail: "<span style='color:#0096FF'>Ad Free</span> learning experience"
    },
]

const Payment = () => (
    <div className="payment-container">
        <div className="pay-container">
            <div className="course-details-container">
                <h1 className="access-heading">
                    Access curated courses worth <span style={{fontFamily: "Roboto", fontSize: 64}}>₹ <span style={{textDecoration: "line-through solid #FF0000"}}>18,500</span></span> at just <span style={{fontFamily: "Roboto", fontSize: 64, color: "#0096FF"}}>₹ 99</span> per year!
                </h1>
                <ul className="details">
                    {courseDetailsList.map(item => (
                        <li key={item.id} className="detail-list">
                            <img src={item.icon} alt={`icon${item.id}`} className="icon" />
                            <p className="detail-text" dangerouslySetInnerHTML={{__html: `${item.detail}`}}></p>
                        </li>
                    ))}
                </ul>
            </div>
            <Subscription />
        </div>
    </div>
)

export default Payment