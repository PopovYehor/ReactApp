
import Header from "../components/header";
import Footer from "../components/footer";
import Maines from "../components/main";
import Profile from "../components/profile";
function ProfileView(){
    return(
        <>
        <Header/>
        <Maines title={'Profile'} data={
            <>
            <Profile/>
            </>
        }/>
        <Footer/>
        </>
    )
}

export default ProfileView