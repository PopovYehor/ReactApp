import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
function CatalogItem ({data}){
return(
    <div className="catalog-container">
    {data.map((elem)=>{
        return (
            <div className="catalog-item">
                <div className="catalog-item-img">
                    <img src={elem.image}></img>
                </div>
                <div className="catalog-item-descriptions">
                    <div className="catalog-item-description">
                        <span className="catalog-item-name">{elem.title}</span>
                        <span className="catalog-item-price">{elem.price} $</span>
                    </div>
                    <div className="catalog-item-buy">
                        <button id={elem.id} className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} /></button>
                    </div>
                </div>
            </div>
        )
    })}
    </div>
)
}
    
    export default CatalogItem