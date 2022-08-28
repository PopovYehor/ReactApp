import Header from "components/header";
import Product from "components/product";
import Footer from "components/footer";
function ProductView (){
    return(
        <div className="container-page">
        <Header/>
        <div className="main-wrap">
        <Product/>
        </div>
        <Footer/>
        </div>
    )
}

export default ProductView