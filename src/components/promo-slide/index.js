import "./style.scss"
import glasses from "../../assets/glasses-slider-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
function PromoSlide (){
return(
<div className="promo-slider-wrap">
    <img className="slide-item-img" src={glasses}></img>
    <div className="promo-slider-container">
        <button className="promo-lider-btn"><FontAwesomeIcon icon={faAngleLeft} /></button>
        <div className="promo-slider-description">
            <div  className="promo-slider-item-name slider-item-text">
                <span>aluminium club</span>
            </div>
            <div className="promo-slider-item-description slider-item-text">
                <span >expirience ray-ban</span>
            </div>
        </div>
        <button className="promo-lider-btn"><FontAwesomeIcon icon={faAngleRight} /></button>
    </div>
</div>
)
}

export default PromoSlide