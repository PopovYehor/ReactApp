import Header from "components/header";
import Error from "../components/error";
import Footer from "components/footer";
function ErrorView (){
    return(

        <div className="container-page">
        <Header/>
        <div className="main-wrap">
        <Error/>
        </div>
        <Footer/>
        </div>

    )
}

export default ErrorView