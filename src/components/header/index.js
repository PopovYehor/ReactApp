import "./style.scss"
import { Link } from "react-router-dom";
import {HiOutlineNewspaper} from "@react-icons/all-files/hi/HiOutlineNewspaper"
import {useSelector} from "react-redux/es/hooks/useSelector";
function Header (){
    const loginBtn = useSelector(state => state.users.loginBtn) 
    const login = useSelector(state => state.users.login)  
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-title">
                    <HiOutlineNewspaper/>
                    <h3 className="header-title-text"><Link to="/">UA Today</Link></h3>
                </div>
                <nav className="header-navigation">
                    <Link className="nav-item" to = "/news">News</Link>
                    <Link className="nav-item" to = {login ? "/profile" : "/login"}>{loginBtn}</Link>
                    
                </nav>
            </div>
        </header>
    )
}
export default Header