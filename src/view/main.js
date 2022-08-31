import Footer from "../components/footer"
import Header from "../components/header"
import NewsCard from "../components/news-card"
import Maines from "../components/main"
import ButtonMore from "../components/button-more"
import { useSelector } from "react-redux/es/hooks/useSelector";
function Main (){
    const newsItems = useSelector(state => state.news.top)  
    return(
        <>
        <Header/>
        <Maines data={
            <>
            <NewsCard items={newsItems}/>
            <ButtonMore/>
            </>
        } title={"Top Stories"}/>
        <Footer/>
        </>
    )
}

export default Main