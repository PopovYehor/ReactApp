import Login from "../components/login";
import Header from "../components/header";
import Footer from "../components/footer";
import Maines from "../components/main";
function LoginView(){
    return(
        <>
        <Header/>
        <Maines title={'Log In'} data={
            <>
            <Login/>
            </>
        }/>
        <Footer/>
        </>
    )
}

export default LoginView