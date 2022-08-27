import React from "react";
import './style.scss'

import Header from "./components/header";
import PromoSlide from "./components/promo-slide";
import MainCatalog from "./components/catalog";
import Sale from "./components/catalog/sale";
import Product from "./components/product";
import Footer from "./components/footer";

const App = () => {

    
    return (
         <div className="container-page">
            <Header/>
            {/* <PromoSlide/> */}
            
            <div className="main-wrap">
                {/* <MainCatalog/>
                <Sale/> */}
                <Product/>
            </div>

            <Footer/>
         </div>
    )
}

export default App;
