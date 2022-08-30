import Header from "components/header";
import CatalogTitle from "components/catalog/catalog-title"
import CatalogItem from "components/catalog/catalog-item"
import Sale from "components/catalog/sale"
import { useContext } from "react";
import {ContextWoman} from "store/context"
import Footer from "components/footer";
function WomanView (){
    const [woman, setWoman] = useContext(ContextWoman)
    return(
        <div className="container-page">
        <Header/>
        <div className="main-wrap">
            <div className="catalog-wrap">
                <CatalogTitle text = {'Woman`s clothing'}/>
                <CatalogItem data = {woman}/>
            </div>
            <Sale/>
        </div>
        <Footer/>
        </div>
    )
}

export default WomanView