import "./style.scss"
import slider1 from "../../assets/slider-1.jpg"
import slider2 from "../../assets/slider-2.jpg"
import slider3 from "../../assets/slider-3.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PromoSlide (){
    const arrSlide = [slider1, slider2, slider3]
    const arrSliderMainText = ['aluminium club', 'cool sound', 'be beautiful']
    const arrSliderDescriptionText = ['expirience ray-ban', 'listen sony', 'put on zara']
    const [slideCount, setSlideCount] = useState(0)
    const [sliderImg, setSliderImg] = useState(arrSlide[slideCount])
    const [slideMainText, setSlideMainText] = useState(arrSliderMainText[slideCount])
    const [slideDescriptionText, setSlideDescriptionText] = useState(arrSliderDescriptionText[slideCount])

    const slider = (e)=>{
        const target = e.target
        if (target.getAttribute('id') == 'slider-right'){
            
            if (slideCount < 2 ){
            setSlideCount(slideCount+1)
            setSliderImg(arrSlide[slideCount])
            setSlideMainText(arrSliderMainText[slideCount])
            setSlideDescriptionText(arrSliderDescriptionText[slideCount])
            }else if (slideCount == (arrSlide.length - 1)){
                setSlideCount(0)
                setSliderImg(arrSlide[slideCount])
                setSlideMainText(arrSliderMainText[slideCount])
                setSlideDescriptionText(arrSliderDescriptionText[slideCount])
            }
        }
        if (target.getAttribute('id') == 'slider-left'){
            if (slideCount > 0 ){
                setSlideCount(slideCount -1)
                setSliderImg(arrSlide[slideCount])
                setSlideMainText(arrSliderMainText[slideCount])
                setSlideDescriptionText(arrSliderDescriptionText[slideCount])
            }else{
                setSlideCount(arrSlide.length-1)
                setSliderImg(arrSlide[slideCount])
                setSlideMainText(arrSliderMainText[slideCount])
                setSlideDescriptionText(arrSliderDescriptionText[slideCount])
            }
        }
    }
return(
<div className="promo-slider-wrap">
    <img className="slide-item-img" src={sliderImg}></img>
    <div className="promo-slider-container">
        <button className="promo-lider-btn" id="slider-left" onClick={(e)=>slider(e)}><FontAwesomeIcon id="slider-left" icon={faAngleLeft} /></button>
        <div className="promo-slider-description">
            <div  className="promo-slider-item-name slider-item-text">
                <span>{slideMainText}</span>
            </div>
            <div className="promo-slider-item-description slider-item-text">
                <span >{slideDescriptionText}</span>
            </div>
        </div>
        <button className="promo-lider-btn" id="slider-right" onClick={(e)=>slider(e)}><FontAwesomeIcon id="slider-right" icon={faAngleRight} /></button>
    </div>
</div>
)
}

export default PromoSlide