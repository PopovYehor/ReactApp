import Footer from "../components/footer"
import Header from "../components/header"
import NewsCard from "../components/news-card"
import Maines from "../components/main"
function Main (){
    return(
        <>
        <Header/>
        <Maines data={
            <>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            </>
        } title={"Breaking News"}/>
        <Footer/>
        </>
    )
}

export default Main