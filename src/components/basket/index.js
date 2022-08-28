import "./style.scss"
import BasketItem from "./basket-item"

import {useContext, useState, useEffect} from "react"
import {ContextBasketItems} from "store/context"
function Basket (){
const [basketItems, setBasketItems] = useContext(ContextBasketItems)  
const [sum, setSum] = useState(0)


useEffect(()=>{
    setSum(()=>{
        return(
            basketItems.reduce((accumulator, object) => {
                return accumulator + object.price;
              }, 0)
        )
    })
}, [sum])
  
return(
<div class="basket-items-wrap">
    <div className="basket-container">
        {basketItems ? <BasketItem/> : <p className="empty-cart-text">Cart is empty</p>}
        <div class="result-price">
            <button class="add-to-basket">To order</button>
            <p class="result-price-text">Total: <span class="result-price-item">{sum} $</span></p>
        </div>
    </div>
</div>
)
}

export default Basket