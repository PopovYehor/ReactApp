import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faTags, faCartShopping} from "@fortawesome/free-solid-svg-icons";
function HeaderBottom (){
    return(
<div className="header-bottom-wrap">
    <div className="header-bottom-container">
        <div className="shop-title-wrap">
            <h1 className="shop-title">leo shop</h1>
        </div>
        <div className="rout-filter-items">
            <div className="rout-filter-top ">
                <a className="filter-item">electronics</a>
                <a className="filter-item">jewelery</a>
            </div>
            <div className="rout-filter-bottom">
                <a className="filter-item">men's clothing</a>
                <a className="filter-item">women's clothing</a>
            </div>
        </div>
        <div className="search-page-wrap">
            <input className="search-page-input" placeholder="Search.."></input>
            <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <div className="cart-wrap">
            <button className="sale-cart"><FontAwesomeIcon icon={faTags} /></button>
            <button className="sale-cart"><FontAwesomeIcon icon={faCartShopping}  /></button>
            <span className="cart-count"> cart (0)</span>
        </div>
    </div>
</div>
    )
}

export default HeaderBottom