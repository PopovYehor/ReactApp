import "./style.scss"
import {FiTrash2} from "@react-icons/all-files/fi/FiTrash2"
import {useContext} from "react"
import {ContextBasketItems, ContextCartCount, ContextHaveProduct, ContextProductId} from "store/context"
import {Link} from "react-router-dom"
function BasketItem (){
    const [basketItems, setBasketItems] = useContext(ContextBasketItems)
    const [basketCount, setBasketCount] = useContext(ContextCartCount)
    const [haveProduct, setHaveProduct] = useContext(ContextHaveProduct)
    const [id, setId] = useContext(ContextProductId)
    const getId = (e)=>{
        const target = e.target
        setId(target.getAttribute('id'))
    }

    const deleteFromBasket = (e)=>{
        const target = e.target
        const targetId = target.getAttribute('id') || target.parentNode.getAttribute('id')
        const change = basketItems.filter(elem => elem.id != targetId)
        const haveProductArr = []
        change.map(elem => haveProductArr.push(elem.id))
        console.log(haveProductArr)
        setBasketItems(change)
        setBasketCount(basketCount - 1)
        setHaveProduct(haveProductArr)
    }

    return(
        <>
        {basketItems.map((elem, i)=>{
            return(
            <div className="basket-item">
                <div className="item-img">
                <Link to={`/product/${elem.id}`}><img src={elem.image} id = {elem.id} onClick={(e)=>getId(e)}></img></Link>
                </div>
                <div class="item-title">
                    <h3 className="title-item">{elem.title}</h3>
                    <p className="item-description">{elem.description}</p>
                </div>
                <div class="basket-price">          
                    <span className="price">{elem.price} $</span>
                </div>
                <div class="delete-from-basket">
                    <button className="delete-from-basket-btn" id={elem.id} onClick={(e)=>deleteFromBasket(e)}><FiTrash2 id={elem.id}/></button>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default BasketItem