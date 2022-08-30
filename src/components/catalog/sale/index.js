import sale1 from "../../../assets/sale-img-1.jpg"
import sale2 from "../../../assets/sale-img-2.jpg"
import sale3 from "../../../assets/sale-img-3.jpg"
import "./style.scss"
import {useState, useEffect} from "react"

function Sale (){
    const arrImg = [sale1, sale2, sale3]
    const [saleImg, setSaleImg] = useState(sale1)
    let i = 0
    
    useEffect(()=>{
        const saleIndicator = document.querySelector('.sale-slider')
        saleIndicator.childNodes[0].classList.add('active')
        setInterval(()=>{
            if (i <= (arrImg.length-2)){
                i ++
                setSaleImg(arrImg[i])
            }else{
                i = 0
                setSaleImg(arrImg[i])
            }
        }, 5000)
        
    }, [])
    
    return(
    <div className="sale-wrap">
        <div className="sale-container">
            <div className="sale-img">
                <img src={saleImg}></img>
            </div>
            <div className="sale-slider">
                {arrImg.map(elem => <div className={saleImg == elem ? "slider-item active" : 'slider-item'}></div>)}
            </div>
        </div>
    </div>
    )
    }
    
    export default Sale