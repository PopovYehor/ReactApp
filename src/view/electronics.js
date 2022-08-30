import Header from "components/header";
import Footer from "components/footer";
import CatalogTitle from "components/catalog/catalog-title"
import CatalogItem from "components/catalog/catalog-item"
import { useContext } from "react";
import {ContextElectronic} from "store/context"
import Sale from "components/catalog/sale"

function ElectronicsView (){
    const [electronic, setElectronic] = useContext(ContextElectronic)
    return(
        <div className="container-page">
        <Header/>
        <div className="main-wrap">
            <div className="catalog-wrap">
                <CatalogTitle text = {'Electronic'}/>
                <CatalogItem data = {electronic}/>
            </div>
            <Sale/>
        </div>
        <Footer/>
        </div>
    )
}

export default ElectronicsView