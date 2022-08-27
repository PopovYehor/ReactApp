import "./style.scss"
import {BiPlus} from "@react-icons/all-files/bi/BiPlus"
import {BiMinus} from "@react-icons/all-files/bi/BiMinus"
function Product (){
    return(
        <div class="main-description-wrap">
            <div className="main-description-container-wrap">
                <div class="description-img">
                    <img  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""></img>
                </div>
                <div className="main-description-container">
                    <div class="sale-description">
                        <div class="title-description">
                            <h1 className="title-product">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                            <p className="product-description">
                            {'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.'}
                            </p>
                        </div>  
                        <p className="price">109.95 $</p>              
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

    )
}
export default Product