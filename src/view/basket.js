import Header from "components/header";
import Basket from "components/basket";
import Footer from "components/footer";
function BasketView (){
    return(

        <div className="container-page">
        <Header/>
        <div className="main-wrap">
        <Basket/>
        </div>
        <Footer/>
        </div>

    )
}

export default BasketView