import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faTags, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {ContextCartCount} from "store/context"
function HeaderBottom (){
    const [basketCount, setBasketCount] = useContext(ContextCartCount)
    return(
<div className="header-bottom-wrap">
    <div className="header-bottom-container">
        <div className="shop-title-wrap">
            <Link className="shop-title" to="/">leo shop</Link>
        </div>
        <div className="rout-filter-items">
            <div className="rout-filter-top ">
                <Link className="filter-item" to="/catalog">Catalog</Link>
                <Link className="filter-item" to="/electronics">electronics</Link>
                <Link className="filter-item" to="/jewelery">jewelery</Link>
            </div>
            <div className="rout-filter-bottom">
                <Link className="filter-item" to="/men">men's clothing</Link>
                <Link className="filter-item" to="/women">women's clothing</Link>
            </div>
        </div>
        <div className="search-page-wrap">
            <input className="search-page-input" placeholder="Search.."></input>
            <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <div className="cart-wrap">
            <button className="sale-cart"><FontAwesomeIcon icon={faTags} /></button>
            <Link className="sale-cart" to='/basket'><FontAwesomeIcon icon={faCartShopping} /></Link>
            <Link className="cart-count" to='/basket'> cart ({basketCount})</Link>
        </div>
    </div>
</div>
    )
}

export default HeaderBottom