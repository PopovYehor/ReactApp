import "./style.css"
function Title (props){
    return (
        <div className={props.classContainer}>
            <h2 className={props.titleClass}>{props.titleText}</h2>
        </div>
    )
}

export default Title