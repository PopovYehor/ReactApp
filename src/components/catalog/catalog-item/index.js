import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {ContextProductId, ContextCartCount, ContextBasketItems, ContextHaveProduct} from "store/context"
import { useContext} from "react"
import {Link} from "react-router-dom"

function CatalogItem ({data}){
    
const [id, setId] = useContext(ContextProductId)
const [basketItems, setBasketItems] = useContext(ContextBasketItems)
const [basketCount, setBasketCount] = useContext(ContextCartCount)
const [haveProduct, setHaveProduct] = useContext(ContextHaveProduct)

const getId = (e)=>{
    const target = e.target
    setId(target.getAttribute('id'))
}

const urlProduct = 'https://fakestoreapi.com/products'

const fetchProduct = (id, btn, i)=>{
    fetch(`${urlProduct}/${id}`)
        .then(res=>res.json())
        .then(res=>{
            let haveInBasket = basketItems.some(elemArr => elemArr.id == res.id)
            if (!haveInBasket){
                setBasketItems(item =>[...item, res])
                btn[i].classList.add('active')
                setBasketCount(basketCount+1)
                setHaveProduct(item => [...item, id])
                }
                else{setBasketItems(basketItems)}
        })
}

const addToBasket = (e)=>{
    const target = e.target
    const btn = document.querySelectorAll('.catalog-item-buy-btn')
    let id = 0
    for (let i = 0; i<btn.length; i++){
        if (target.parentNode.getAttribute('id') == btn[i].getAttribute('id')){
            id = btn[i].getAttribute('id')
            fetchProduct(id, btn, i)
            break
        }
        else if(target.parentNode.parentNode.getAttribute('id') == btn[i].getAttribute('id')){
            id = btn[i].getAttribute('id')
            fetchProduct(id, btn, i)
            break
        }
        else if (target.getAttribute('id') == btn[i].getAttribute('id')){
            id = btn[i].getAttribute('id')
            fetchProduct(id, btn, i)
            break
        }
    }
}
    
return(
    <div className="catalog-container">
    {data.map((elem)=>{
        return (
            <div  className="catalog-item" >
                <div className="catalog-item-img">
                <Link to={`/product/${elem.id}`}><img onClick={(e)=>getId(e)} src={elem.image} id={elem.id}/></Link>
                </div>
                <div className="catalog-item-descriptions">
                    <div className="catalog-item-description">
                    <Link  d={elem.id} onClick={(e)=>getId(e)}  to={`/product/${elem.id}`} className="catalog-item-name">{elem.title}</Link>
                        <span className="catalog-item-price">{elem.price} $</span>
                    </div>
                    <div className="catalog-item-buy" id={elem.id}>
                        <button id={elem.id} className={haveProduct.some(element => element == elem.id) ? "catalog-item-buy-btn active" : "catalog-item-buy-btn"} onClick={(e)=> addToBasket(e)}><FontAwesomeIcon icon={ faBasketShopping} /></button>
                    </div>
                </div>
            </div>
        )
    })}
    </div>
)
}
    
    export default CatalogItem