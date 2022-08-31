import {FiRefreshCw} from "@react-icons/all-files/fi/FiRefreshCw"
import "./style.scss"
function ButtonMore (){
    return(
        <div className="load-more-wrap">
            <button className="load-more-btn"><FiRefreshCw/>Load more</button>
        </div>
    )
}

export default ButtonMore