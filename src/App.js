
import "./style.scss"
import {useRoutes, Routes, BrowserRouter} from "react-router-dom"
import { Route, Switch } from "react-router"
import { useSelector } from "react-redux/es/hooks/useSelector";
import News from "./view/news";
import LoginView from "./view/login";
import ProfileView from "./view/profile";
import Main from "./view/main"
const App = () => {
    const login = useSelector(state => state.users.login)  
    return (
    <>
    <BrowserRouter>
        <Routes> 
            <Route path="/" element = {<Main/>}/>
            <Route path="/news" element = {<News/>}/>
            <Route path="/profile" element = {login ? <ProfileView/> : <LoginView/>}/>
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default App;
