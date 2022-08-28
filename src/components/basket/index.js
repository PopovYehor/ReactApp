import "./style.scss"
import BasketItem from "./basket-item"
import { useState, useEffect } from "react";
function Basket ({items}){
    const [price, setPrice] = useState('')
    const totalPrice = ()=>{
        items.map(elem => console.log(elem.price))
    }
    totalPrice()
return(
<div class="basket-items-wrap">
    <div className="basket-container">
        <BasketItem data = {items}/>
            <div class="result-price">
                <button class="add-to-basket">To order</button>
                <p class="result-price-text">Total: <span class="result-price-item">{price} $</span></p>
            </div>
    </div>
</div>
)
}

export default Basket