import "./style.scss"
import CatalogTitle from "./catalog-title"
import CatalogItem from "./catalog-item"
import { useState, useEffect } from "react";
function MainCatalog (){
    const [electronic, setElectronic] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [manClothing, setManClothing] = useState([])
    const [womanClothing, setWomanClothing] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>{
                setElectronic(json)
            })
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>{
            setJewelery(json)
        })
        
        fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(res=>res.json())
        .then(json=>{
            setManClothing(json)
        })
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(res=>res.json())
        .then(json=>{
            setWomanClothing(json)
        })
        
    }, [])
    return(
        <div className="catalog-wrap">
            <CatalogTitle text = {'Electronics'}/>
            <CatalogItem data = {electronic}/>
            <CatalogTitle text = {'Jewelery'}/>
            <CatalogItem data = {jewelery}/>
            <CatalogTitle text = {'Man`s clothing'}/>
            <CatalogItem data = {manClothing}/>
            <CatalogTitle text = {'Woman`s clothing'}/>
            <CatalogItem data = {womanClothing}/>
        </div>
    )
    }
    
    export default MainCatalog