import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faPhone } from "@fortawesome/free-solid-svg-icons";
function FooterTop (){
return(
    <div className="footer-top-wrap">
        <div className="footer-top-container">
            <div className="delivery-info footer-top-item">
                <div className="delivery-icon footer-top-icon"><FontAwesomeIcon icon={faTruck}/></div>
                <span className="delivery-description footer-top-description">free shiping on orders over 100$</span>
            </div>
            <div className="delivery-info footer-top-item">
                <div className="delivery-icon footer-top-icon"><FontAwesomeIcon icon={faPhone}/></div>
                <span className="delivery-description footer-top-description">call us! toll free 409-8888-0099</span>
            </div>
        </div>
    </div>
    )
}

export default FooterTop