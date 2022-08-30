import "./style.scss"
function NewsCard(){
    return(
        <div className="news-item">
            <div className="news-img">
                <img src={"https://images.pexels.com/photos/12936834/pexels-photo-12936834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}></img>
            </div>
            <div className="news-item-content">
                <div className="news-item-title">
                    <h4 className="news-item-title-text">Breastfeeding athletes can now bring their babies to the Tokyo Olympics</h4>
                </div>
                <div className="news-item-description">
                    <p className="news-item-description-text">They still had a big impact.</p>
                </div>
                <div className="news-item-date">
                    <data className="news-item-date-text">mar 09, 2021</data>
                </div>
            </div>
        </div>
    )
}

export default NewsCard