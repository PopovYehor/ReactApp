

import "./style.scss"
import {useRoutes} from "react-router-dom"

import Main from "./view/main";
import News from "./view/news";
import Header from "./components/header";
import Footer from "./components/footer";
const App = () => {
    const router = useRoutes([
        { path: "/", element: <Main/> },
        { path: "/news", element: <News/> },
        ])
    return router
}

export default App;
