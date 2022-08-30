import Header from "../components/header"
import Footer from "../components/footer"
import NewsLine from "../components/news-line"
import Maines from "../components/main"
function News (){
    return(
        <>
        <Header/>
        <Maines data={
            <>
            <div className="daily-news-container">
            <NewsLine/>
            <NewsLine/>
            <NewsLine/>
            <NewsLine/>
            </div>
            </>
        } title={"Daily News"}/>
        <Footer/>
        </>
    )
}

export default News