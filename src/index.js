import React from "react";
import App from "./app";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
function Init() {


    return (
            <React.StrictMode>
                <Router>
                    <App/>
                </Router>
           </React.StrictMode>
    )
}

ReactDOM.render(<Init />, document.getElementById('root'));

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
