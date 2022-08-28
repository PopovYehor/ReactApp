import Header from "components/header";
import CatalogTitle from "components/catalog/catalog-title"
import CatalogItem from "components/catalog/catalog-item"
import Footer from "components/footer";
import { useContext } from "react";
import {ContextJewelery} from "store/context"
function JeweleryView (){
    const [jewelery, setJewelery] = useContext(ContextJewelery)
    return(
        <div className="container-page">
        <Header/>
        <div className="main-wrap">
            <div className="catalog-wrap">
                <CatalogTitle text = {'Jewelery'}/>
                <CatalogItem data = {jewelery}/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default JeweleryView