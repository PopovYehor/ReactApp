import "./style.scss"
import {BiPlus} from "@react-icons/all-files/bi/BiPlus"
import {BiMinus} from "@react-icons/all-files/bi/BiMinus"
import {FiTrash2} from "@react-icons/all-files/fi/FiTrash2"

function BasketItem ({data}){
    return(
        <>
        {data.map((elem)=>{
            return(
            <div class="basket-item">
                <div class="item-img">
                    <img src={elem.image}></img>
                </div>
                <div class="item-title">
                    <h3 className="title-item">{elem.title}</h3>
                    <p className="item-description">{elem.description}</p>
                </div>
                <div class="count-basket">
                    <button class="count-to-basket"><BiMinus/></button>
                    <span className="count-to-basket-item">1</span>
                    <button class="count-to-basket"><BiPlus/></button>
                </div>
                <div class="basket-price">          
                    <span className="price">{elem.price}$</span>
                </div>
                <div class="delete-from-basket">
                    <button className="delete-from-basket-btn"><FiTrash2/></button>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default BasketItem