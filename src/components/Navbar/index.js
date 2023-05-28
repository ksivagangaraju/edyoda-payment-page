import './index.css'

const selectsList = [
    {
        id: 1,
        select: 'Courses',
        arrowImg: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685180720/Vector1_ml7shb.png'
    },
    {
        id: 2,
        select: 'Programs',
        arrowImg: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685180720/Vector1_ml7shb.png'
    }
]

const Navbar = () => (
    <nav className="navbar-container">
        <div className="nav-container">
            <div className="logo-and-select-container">
                <button type="button" className="button"  style={{marginRight: 64}}>
                    <h1 className="logo">EDYOGA</h1>
                </button>
                <ul className="select-container">
                    {selectsList.map(item => (
                        <li key={item.id} className="select">
                            <button type="button" className="button select"  style={{marginRight: 64}}>
                                {item.select} <img src={item.arrowImg} alt='arrow' className="arrow-img" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="search-and-login-container" style={{padding: 0, listStyleType: "none"}}>
                <li>
                    <button type="button" className="button" style={{marginLeft: 64, paddingTop: 10}}>
                        <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1685181467/Vector2_p9m6kn.png' alt="search" className="search-img" />
                    </button>
                </li>
                <li>
                    <button type="button" className="button" style={{marginLeft: 64}}>Login</button>
                </li>
                <li>
                    <button  type="button" className="button join-button" style={{marginLeft: 64}}>JOIN NOW</button>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar