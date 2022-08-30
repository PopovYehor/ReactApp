import "./style.scss"
function NewsLine (){
    return(
    <div className="line-news-item">
        <div className="line-news-item-content-container">
            <div className="line-news-img">
                <img src={"https://images.pexels.com/photos/12936834/pexels-photo-12936834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}></img>
            </div>
            <div className="line-news-item-content">
                <div className="line-news-item-title">
                    <h4 className="line-news-item-title-text">Breastfeeding athletes can now bring their babies to the Tokyo Olympics</h4>
                </div>
                <div className="line-news-item-description">
                    <p className="line-news-item-description-text">They still had a big impact. They still had a big impact.</p>
                </div>
            </div>
        </div>
        <div className="line-news-item-date">
            <data className="line-news-item-date-text">mar 09, 2021</data>
        </div>
    </div>
    )
}

export default NewsLine