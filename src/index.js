import React, { useState } from "react";
import App from "./app";
import ReactDOM from 'react-dom';
import {  ContextJewelery, ContextElectronic, ContextMan, ContextWoman, ContextAll, ContextProductId,  ContextCartCount, ContextBasketItems } from "store/context";
import {BrowserRouter as Router} from "react-router-dom"
function Init() {
    const [jewelery, setJewelery] = useState([])
    const [electronic, setElectronic] = useState([])
    const [man, setMan] = useState([])
    const [woman, setWoman] = useState([])
    const [allProduct, setAllProduct] = useState([])
    const [id, setId] = useState(0)
    const [basketCount, setBasketCount] = useState(0)
    const [basketItems, setBasketItems] = useState([])

    return (
            <React.StrictMode>
            <Router>
            <ContextJewelery.Provider value={[jewelery, setJewelery]}>
                <ContextElectronic.Provider value={[electronic, setElectronic]}>
                    <ContextMan.Provider value={[man, setMan]}>
                        <ContextWoman.Provider value={[woman, setWoman]}>
                            <ContextAll.Provider value={[allProduct, setAllProduct]}>
                                <ContextProductId.Provider value={[id, setId]}>
                                    <ContextCartCount.Provider value={[basketCount, setBasketCount]}>
                                        <ContextBasketItems.Provider value={[basketItems, setBasketItems]}>
                                            <App/>
                                        </ContextBasketItems.Provider>
                                    </ContextCartCount.Provider>
                                </ContextProductId.Provider>
                            </ContextAll.Provider>
                        </ContextWoman.Provider>
                    </ContextMan.Provider>
                </ContextElectronic.Provider>
            </ContextJewelery.Provider>
            </Router>
           </React.StrictMode>
    )
}

ReactDOM.render(<Init />, document.getElementById('root'));

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
