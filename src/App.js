import React from "react";
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faAngleRight, faAngleLeft, faBasketShopping, faTruck, faPhone } from "@fortawesome/free-solid-svg-icons";

import glasses from "./assets/glasses-slider-1.jpg"
import sale from "./assets/sale-img-1.jpg"
const App = () => {
    return (
         <div className="container-page">
            <header className="header">
                <div className="header-top-wrap">
                    <div className="header-top-container">
                        <div className="page-parametr">
                            <div className="language">
                                <span className="language-label">Language:</span>
                                <select className="language-select">
                                    <option>English</option>
                                </select>
                            </div>
                            <div className="currency">
                                <span className="currency-label">Currency:</span>
                                <select className="currency-select">
                                    <option>USD</option>
                                </select>
                            </div>
                        </div>
                        <div className="rout-page-wrap">
                            <div className="rout-page-items">
                                <a className="rout-page-item">Account</a>
                                <span>|</span>
                                <a className="rout-page-item">Wishlist</a>
                                <span>|</span>
                                <a className="rout-page-item">Checkout</a>
                                <span>|</span>
                                <a className="rout-page-item">Log In</a>
                                <span>|</span>
                                <a className="rout-page-item">Sign Up</a>
                            </div>
                        </div> 
                    </div>
                </div>
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
                                <button className="sale-cart"><FontAwesomeIcon icon={faTags} style ={{color: 'white'}}/></button>
                                <button className="sale-cart"><FontAwesomeIcon icon={faCartShopping} style ={{color: 'white'}} /></button>
                                <span className="cart-count"> cart (0)</span>
                            </div>
                        </div>
                    </div>
            </header>

            <div className="promo-slider-wrap">
                <img className="slide-item-img" src={glasses}></img>
                <div className="promo-slider-container">
                    <button className="promo-lider-btn"><FontAwesomeIcon icon={faAngleLeft} style= {{color: '	#C0C0C0'}}/></button>
                    <div className="promo-slider-description">
                        <div  className="promo-slider-item-name slider-item-text">
                            <span>aluminium club</span>
                        </div>
                        <div className="promo-slider-item-description slider-item-text">
                            <span >expirience ray-ban</span>
                        </div>
                    </div>
                    <button className="promo-lider-btn"><FontAwesomeIcon icon={faAngleRight} style= {{color: '	#C0C0C0'}}/></button>
                </div>
            </div>
            <div className="main-wrap">
                <div className="catalog-wrap">

                        <div className="catalog-title">
                            <h3>ELECTRONICS</h3>
                        </div>
                    <div className="catalog-container">
                        
                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="catalog-title">
                            <h3>Jewelery</h3>
                        </div>
                    <div className="catalog-container">
                        
                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="catalog-title">
                            <h3>Men's clothing</h3>
                        </div>
                    <div className="catalog-container">
                        
                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="catalog-title">
                            <h3>Women's clothing</h3>
                        </div>
                    <div className="catalog-container">
                        
                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <div className="catalog-item-img">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
                            </div>
                            <div className="catalog-item-descriptions">
                                <div className="catalog-item-description">
                                    <span className="catalog-item-name">Your perfect pack for everyday use and walks in the forest</span>
                                    <span className="catalog-item-price">109.95 $</span>
                                </div>
                                <div className="catalog-item-buy">
                                    <button className="catalog-item-buy-btn"><FontAwesomeIcon icon={ faBasketShopping} style = {{color: 'white'}}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sale-wrap">
                    <div className="sale-container">
                        <div className="sale-img">
                            <img src={sale}></img>
                        </div>
                        <div className="sale-slider">
                            <div className="slider-item active"></div>
                            <div className="slider-item "></div>
                            <div className="slider-item "></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                    <div className="footer-top-wrap">
                        <div className="footer-top-container">
                            <div className="delivery-info footer-top-item">
                                <div className="delivery-icon footer-top-icon"><FontAwesomeIcon icon={faTruck} style={{color: '#39a0b9'}}/></div>
                                <span className="delivery-description footer-top-description">free shiping on orders over 100$</span>
                            </div>
                            <div className="delivery-info footer-top-item">
                                <div className="delivery-icon footer-top-icon"><FontAwesomeIcon icon={faPhone} style={{color: '#39a0b9'}}/></div>
                                <span className="delivery-description footer-top-description">call us! toll free 409-8888-0099</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-wrap">
                        <div className="footer-bottom-container">
                            <div className="footer-bottom-item">
                                <span className="footer-bottom-item-description">© Copyright 2013 Css Autor, All Rights Reserved.</span>
                            </div>
                            <div className="footer-bottom-item">
                                <span className="footer-bottom-item-description">About Us</span>
                                <span className="footer-bottom-item-description">|</span>
                                <span className="footer-bottom-item-description">{'Delivery & Returns'}</span>
                                <span className="footer-bottom-item-description">|</span>
                                <span className="footer-bottom-item-description">{'Terms & Conditions'}</span>
                                <span className="footer-bottom-item-description">|</span>
                                <span className="footer-bottom-item-description">Contact Us</span>
                            </div>
                        </div>
                    </div>
                </footer>
         </div>
    )
}

export default App;
