import "./style.css"
function Input(props){

    return(
        <input value={props.value} onChange = {props.func} className={props.class} placeholder={props.placeholder}/>
    )
}
export default Input