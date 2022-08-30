import "./style.scss"
import {useEffect, useContext, useState } from "react"
import {ContextProductId, ContextBasketItems, ContextCartCount, ContextHaveProduct} from "store/context"
import {fetchContext} from "helpers/fetchContext"

function Product (){
    const [id, setId] = useContext(ContextProductId)
    const [product, setProduct] = useState([])
    const [basketItems, setBasketItems] = useContext(ContextBasketItems)
    const [basketCount, setBasketCount] = useContext(ContextCartCount)
    const [haveProduct, setHaveProduct] = useContext(ContextHaveProduct)

    const urlProduct = 'https://fakestoreapi.com/products'

    const fetchProduct = (id, btn)=>{
        fetch(`${urlProduct}/${id}`)
            .then(res=>res.json())
            .then(res=>{
                const haveInBasket = basketItems.some(elemArr => elemArr.id == res.id)
                if (!haveInBasket){
                    setBasketItems(item =>[...item, res])
                    btn.classList.add('active')
                    setBasketCount(basketCount+1)
                    }else{setBasketItems(basketItems)}
            })
    }
    
    const addToBasket = ()=>{
        const btn = document.querySelector('.add-to-basket')
        fetchProduct(id, btn)
        const have = haveProduct.some(element => element == product.id)
        if (!have) setHaveProduct(item => [...item, product.id])
    }
    
    useEffect(()=>{
        fetchContext(`${urlProduct}/${id}`, setProduct)
    }, [])
    
    return(
        <>
        {
            <div class="main-description-wrap">
                <div className="main-description-container-wrap">
                    <div class="description-img">
                        <img  src={product.image} alt=""></img>
                    </div>
                    <div className="main-description-container">
                        <div class="sale-description">
                            <div class="title-description">
                                <h1 className="title-product">{product.title}</h1>
                                <p className="product-description">{product.description}</p>
                            </div>  
                            <p className="price">{product.price} $</p>              
                        </div>
                        <div class="description-add-to-basket">
                            <button className={haveProduct.some(element => element == product.id) ? "add-to-basket active" : 'add-to-basket'} id={product.id} onClick={()=>addToBasket()}>Add to bsket</button>
                        </div>
                    </div>
                </div>
            </div> 
        }
        
        </>
    )
}
export default Product