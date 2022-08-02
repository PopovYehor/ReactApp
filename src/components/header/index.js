import "./style.css"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Header (props){
   console.log(props)
 return (
    <div className = "header">
      <div className="header-awesome"><div onClick={props.menuActive}><FontAwesomeIcon icon={faBars}/></div></div>
    <div className="header-title"><h1 className = "header-title-text">{props.title}</h1></div>
    </div>
 )
}

export default Header