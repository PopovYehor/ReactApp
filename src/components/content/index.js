import "./style.css"

function Content (props){
 return (
    <div className = "content">
        <p className = 'content-text'>{props.text}</p>
    </div>
 )
}

export default Content