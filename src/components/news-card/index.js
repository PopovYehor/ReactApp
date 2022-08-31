import "./style.scss"
function NewsCard({items}){

    return items.map(elem =>{
        return (
                <div className="news-item">
                    <div className="news-img">
                        <img src={elem.img}></img>
                    </div>
                    <div className="news-item-content">
                        <div className="news-item-title">
                            <h4 className="news-item-title-text">{elem.title}</h4>
                        </div>
                        <div className="news-item-description">
                            <p className="news-item-description-text">{elem.summary}</p>
                        </div>
                        <div className="news-item-date">
                            <data className="news-item-date-text">{elem.date}</data>
                        </div>
                    </div>
                </div>
            )
        })
        
    
}

export default NewsCard