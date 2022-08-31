import "./style.scss"
function NewsLine ({items}){
    return(
        items.map(elem =>{
            return(
                <div className="line-news-item">
                    <div className="line-news-item-content-container">
                        <div className="line-news-img">
                            <img src={elem.img}></img>
                        </div>
                        <div className="line-news-item-content">
                            <div className="line-news-item-title">
                                <h4 className="line-news-item-title-text">{elem.title}</h4>
                            </div>
                            <div className="line-news-item-description">
                                <p className="line-news-item-description-text">{elem.summary}</p>
                            </div>
                        </div>
                    </div>
                    <div className="line-news-item-date">
                        <data className="line-news-item-date-text">{elem.date}</data>
                    </div>
                </div>
            )
        })
    
    )
}

export default NewsLine