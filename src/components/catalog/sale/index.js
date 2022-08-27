import sale from "../../../assets/sale-img-1.jpg"
import "./style.scss"
function Sale (){
    return(
    <div className="sale-wrap">
        <div className="sale-container">
            <div className="sale-img">
                <img src={sale}></img>
            </div>
            <div className="sale-slider">
                <div className="slider-item active"></div>
                <div className="slider-item "></div>
                <div className="slider-item "></div>
            </div>
        </div>
    </div>
    )
    }
    
    export default Sale