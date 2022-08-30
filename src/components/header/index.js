import "./style.scss"
import { Link } from "react-router-dom";
import {HiOutlineNewspaper} from "@react-icons/all-files/hi/HiOutlineNewspaper"
function Header (){
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-title">
                    <HiOutlineNewspaper/>
                    <h3 className="header-title-text"><Link to="/">USA Today</Link></h3>
                </div>
                <nav className="header-navigation">
                    <Link className="nav-item" to = "/news">News</Link>
                    <Link className="nav-item" to = "/profile">Profile</Link>
                    
                </nav>
            </div>
        </header>
    )
}
export default Header