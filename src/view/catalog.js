import Header from "components/header";
import Footer from "components/footer";
import { useContext } from "react";
import CatalogTitle from "components/catalog/catalog-title"
import CatalogItem from "components/catalog/catalog-item"
import {ContextAll} from "store/context"
function CatalogView (){
    const [allProduct, setAllProduct] = useContext(ContextAll)
    return(
        <div className="container-page">
        <Header/>
        <div className="main-wrap">
            <div className="catalog-wrap">
                <CatalogTitle text = {'Catalog'}/>
                <CatalogItem data = {allProduct}/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default CatalogView