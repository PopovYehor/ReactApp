import "./style.scss"
function FooterBottom (){
return(
<div className="footer-bottom-wrap">
    <div className="footer-bottom-container">
        <div className="footer-bottom-item">
            <span className="footer-bottom-item-description">© Copyright 2013 Css Autor, All Rights Reserved.</span>
        </div>
        <div className="footer-bottom-item">
            <a className="footer-bottom-item-description">About Us</a>
            <span className="footer-bottom-item-description">|</span>
            <a className="footer-bottom-item-description">{'Delivery & Returns'}</a>
            <span className="footer-bottom-item-description">|</span>
            <a className="footer-bottom-item-description">{'Terms & Conditions'}</a>
            <span className="footer-bottom-item-description">|</span>
            <a className="footer-bottom-item-description">Contact Us</a>
        </div>
    </div>
</div>
)
}

export default FooterBottom