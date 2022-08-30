import React from "react";
import './style.scss'
import {  ContextJewelery, ContextElectronic, ContextMan, ContextWoman, ContextAll} from "store/context";
import { useEffect, useContext } from "react";
import {useRoutes} from "react-router-dom"
import { fetchContext } from "./helpers/fetchContext";

import MainView from "./view/main";
import CatalogView from "./view/catalog";
import ElectronicsView from "./view/electronics";
import JeweleryView from "./view/jewerely";
import ManView from "./view/manClothing";
import WomanView from "./view/womanClothing";
import BasketView from "./view/basket";
import ProductView from "./view/product";
const App = () => {

    const [jewelery, setJewelery] = useContext(ContextJewelery)
    const [electronic, setElectronic] = useContext(ContextElectronic)
    const [man, setMan] = useContext(ContextMan)
    const [woman, setWoman] = useContext(ContextWoman)
    const [allProduct, setAllProduct] = useContext(ContextAll)

    const urlElectronics = 'https://fakestoreapi.com/products/category/electronics'
    const urlJewelery = 'https://fakestoreapi.com/products/category/jewelery'
    const urlMan = `https://fakestoreapi.com/products/category/men's clothing`
    const urlWoman = `https://fakestoreapi.com/products/category/women's clothing`
    const urlProduct = 'https://fakestoreapi.com/products'

    useEffect(()=>{
        fetchContext(urlElectronics, setElectronic)
        fetchContext(urlJewelery, setJewelery)
        fetchContext(urlMan, setMan)
        fetchContext(urlWoman, setWoman)
        fetchContext(urlProduct, setAllProduct)
    }, [])

    const router = useRoutes([
        { path: "/", element: <MainView/> },
        { path: "/catalog", element: <CatalogView/> },
        { path: "/electronics", element: <ElectronicsView/> },
        { path: "/jewelery", element: <JeweleryView/> },
        { path: "/men", element: <ManView/> },
        { path: "/women", element: <WomanView/> },
        { path: "/basket", element: <BasketView/> },
        { path: "/product/:id", element: <ProductView/> },
        ])
    return router
}

export default App;
