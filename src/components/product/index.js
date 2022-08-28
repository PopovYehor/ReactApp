import "./style.scss"
import {BiPlus} from "@react-icons/all-files/bi/BiPlus"
import {BiMinus} from "@react-icons/all-files/bi/BiMinus"
import {useEffect, useContext, useState } from "react"
import {ContextProductId} from "store/context"
import {fetchContext} from "../../helpers/fetchContext"
function Product (){
    const [id, setId] = useContext(ContextProductId)
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> setProduct(json))
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
                            <button class="add-to-basket">Добавить в корзину</button>
                            <div class="count-to-basket"><BiPlus/></div>
                            <span className="count-to-basket-item">1</span>
                            <div class="count-to-basket"><BiMinus/></div>
                        </div>
                    </div>
                </div>
            </div> 
        }
        
        </>
    )
}
export default Product