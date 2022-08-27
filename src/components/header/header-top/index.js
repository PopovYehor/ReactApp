import "./style.scss"
function HeaderTop (){
    return(
<div className="header-top-wrap">
    <div className="header-top-container">
        <div className="page-parametr">
            <div className="language">
                <span className="language-label">Language:</span>
                <select className="language-select">
                    <option>English</option>
                </select>
            </div>
            <div className="currency">
                <span className="currency-label">Currency:</span>
                <select className="currency-select">
                    <option>USD</option>
                </select>
            </div>
        </div>
        <div className="rout-page-wrap">
            <div className="rout-page-items">
                <a className="rout-page-item">Account</a>
                <span>|</span>
                <a className="rout-page-item">Wishlist</a>
                <span>|</span>
                <a className="rout-page-item">Checkout</a>
                <span>|</span>
                <a className="rout-page-item">Log In</a>
                <span>|</span>
                <a className="rout-page-item">Sign Up</a>
            </div>
        </div> 
    </div>
</div>  
    )
}

export default HeaderTop