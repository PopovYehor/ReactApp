import "./style.scss"
function Maines ({data, title}){
    return(
        <main className="main-wrap">
        <div className="main-title">
            <h3 className="main-title-text">{title}</h3>
        </div>
        <div className="main-container">
            {data}
        </div>
    </main>
    )
}

export default Maines