import "./style.css"
function Input(props){

    return(
        <input className={props.class} placeholder={props.placeholder}/>
    )
}
export default Input