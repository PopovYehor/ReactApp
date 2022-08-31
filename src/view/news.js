import Header from "../components/header"
import Footer from "../components/footer"
import NewsLine from "../components/news-line"
import Maines from "../components/main"
import {useSelector} from "react-redux/es/hooks/useSelector";
import ButtonMore from "../components/button-more";
function News (){
    const dayNews = useSelector(state => state.news.day)  
    return(
        <>
        <Header/>
        <Maines data={
            <>
            <div className="daily-news-container">
            <NewsLine items={dayNews}/>
            </div>
            <ButtonMore/>
            </>
        } title={"Daily News"}/>
        <Footer/>
        </>
    )
}

export default News