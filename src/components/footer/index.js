import "./style.scss"
import { Link } from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";
function Footer(){
    const loginBtn = useSelector(state => state.users.loginBtn) 
    return(
        <footer className="footer">
            <div className="footer-container">
                <nav className="footer-navigation-main">
                    <ul className="footer-navigation-main-list">
                        <li className="footer-navigation-main-list-item"><Link className="nav-item" to = "/news">News</Link></li>
                        <li className="footer-navigation-main-list-item"><Link className="nav-item" to = "/profile">{loginBtn}</Link></li>
                        <li className="footer-navigation-main-list-item">About us</li>
                        <li className="footer-navigation-main-list-item">Contact</li>
                    </ul>
                </nav>
                <nav className="footer-navigation-main">
                    <ul className="footer-navigation-main-list">
                        <li className="footer-navigation-main-list-item">Facebook</li>
                        <li className="footer-navigation-main-list-item">Twitter</li>
                        <li className="footer-navigation-main-list-item">Instagram</li>
                        <li className="footer-navigation-main-list-item"> Linkedin</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer