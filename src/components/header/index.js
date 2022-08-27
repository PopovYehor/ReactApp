import HeaderTop from "./header-top"
import HeaderBottom from "./header-bottom"
import "./style.scss"
function Header (){
return(
<header className="header">
    <HeaderTop/>
    <HeaderBottom/> 
</header>
)
}

export default Header