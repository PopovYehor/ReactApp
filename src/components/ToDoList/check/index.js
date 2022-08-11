import "./style.css"
function Check (props){
    return(
        <input type="checkbox" className="check" checked={props.check}></input>
    )
}
export default Check