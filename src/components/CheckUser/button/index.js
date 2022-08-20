import "./style.css"
function Button(props){

    return (
        <button onClick={props.func} value={props.value} className={props.class}>{props.text}</button>
    )
}

export default Button