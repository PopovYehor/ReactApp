import Header from "components/header";
import CatalogTitle from "components/catalog/catalog-title"
import CatalogItem from "components/catalog/catalog-item"
import Footer from "components/footer";
import { useContext } from "react";
import {ContextMan} from "store/context"
function ManView (){
    const [man, setMan] = useContext(ContextMan)
    return(
        <div className="container-page">
        <Header/>
        <div className="main-wrap">
            <div className="catalog-wrap">
                <CatalogTitle text = {'Man`s clothing'}/>
                <CatalogItem data = {man}/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ManView