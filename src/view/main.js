import Header from "components/header";
import PromoSlide from "components/promo-slide";
import Sale from "components/catalog/sale";
import Footer from "components/footer";
import CatalogTitle from "components/catalog/catalog-title"
import CatalogItem from "components/catalog/catalog-item"
import { useContext } from "react";
import {ContextMan, ContextJewelery, ContextElectronic, ContextWoman} from "store/context"
function MainView (){
    const [jewelery, setJewelery] = useContext(ContextJewelery)
    const [electronic, setElectronic] = useContext(ContextElectronic)
    const [man, setMan] = useContext(ContextMan)
    const [woman, setWoman] = useContext(ContextWoman)
    
    return(
        <div className="container-page">
        <Header/>
        <PromoSlide/>
        <div className="main-wrap">
            <div className="catalog-wrap">
            <CatalogTitle text = {'Electronics'}/>
            <CatalogItem data = {electronic}/>
            <CatalogTitle text = {'Jewelery'}/>
            <CatalogItem data = {jewelery}/>
            <CatalogTitle text = {'Man`s clothing'}/>
            <CatalogItem data = {man}/>
            <CatalogTitle text = {'Woman`s clothing'}/>
            <CatalogItem data = {woman}/>
            </div>
        <Sale/>
        </div>
        <Footer/>
        </div>
    )
}

export default MainView