import "./style.scss"
import {BiPlus} from "@react-icons/all-files/bi/BiPlus"
import {BiMinus} from "@react-icons/all-files/bi/BiMinus"
import {FiTrash2} from "@react-icons/all-files/fi/FiTrash2"
import {useContext, useEffect, useState} from "react"
import {ContextBasketItems} from "store/context"
function BasketItem (){
    const [basketItems, setBasketItems] = useContext(ContextBasketItems)
    const [basketItemCount, setBasketItemCount] = useState(1)
    const [price, setPrice] = useState([])
    const [defPrice, setDefPrice] = useState([])

    /* const changeBasketCountPlus =(e, i)=>{
        const target= e.target
        const plus = document.querySelector('.plus')
        const plusId = plus.getAttribute('id')
        if (target.parentNode.getAttribute('id') == plusId){
            setBasketItemCount(basketItemCount+1)
            setPrice(item =>[item[i]+defPrice[i]])
        }
        else if(target.parentNode.parentNode.getAttribute('id') == plusId){
            setBasketItemCount(basketItemCount+1)
            setPrice(item =>[item[i]+defPrice[i]])
        }
        else if (target.getAttribute('id') == plusId){
            setBasketItemCount(basketItemCount+1)
            setPrice(item =>[item[i]+defPrice[i]])
        }
    }
    const changeBasketCountMinus =(e, i)=>{
        const target= e.target
        const minus = document.querySelector('.plus')
        const minusId = minus.getAttribute('id')
        if (target.parentNode.getAttribute('id') == minusId){
            if (basketItemCount > 1){
            setBasketItemCount(basketItemCount-1)
            setPrice(item =>[item[i]-defPrice[i]])
            }
        }
        else if(target.parentNode.parentNode.getAttribute('id') == minusId){
            if (basketItemCount > 1){
                setBasketItemCount(basketItemCount-1)
                setPrice(item =>[item[i]-defPrice[i]])
                }
        }
        else if (target.getAttribute('id') == minusId){
            if (basketItemCount > 1){
                setBasketItemCount(basketItemCount-1)
                setPrice(item =>[item[i]-defPrice[i]])
                }
        }
    } */
    useEffect(()=>{
        basketItems.map(elem=>setPrice(item => [...item, elem.price]))
        basketItems.map(elem=>setDefPrice(item => [...item, elem.price]))
    }, [])
    return(
        <>
        {basketItems.map((elem, i)=>{
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
                    <button onClick={(e)=>{changeBasketCountMinus(e, i)}} id={elem.id} class="count-to-basket minus"><BiMinus/></button>
                    <span className="count-to-basket-item">{basketItemCount}</span>
                    <button onClick={(e)=>{changeBasketCountPlus(e, i)}} id={elem.id} class="count-to-basket plus"><BiPlus /></button>
                </div>
                <div class="basket-price">          
                    <span className="price">{Number(price[i]).toFixed(2)} $</span>
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