import "./style.css"
import Check from "../check"
import Title from '../../title'
function List (){
    let userName = sessionStorage.getItem('userName')
    let userTask = JSON.parse(sessionStorage.getItem('userTask'))
    let userCheck = JSON.parse(sessionStorage.getItem('userCheck'))
    console.log(userTask)
    return(
        <div className='to-do-list-container'>
                <Title classContainer='title-list-container' titleClass='list-title' titleText={`Список дел пользователя ${userName}`} />
                <div className="do-list">
                    <ol className="list">
                        {userTask.map((elem, i )=> <li key={i} className={userCheck[i] === false ? "list-item" : "list-item done"}>{elem} <Check check= {userCheck[i] === true}/></li> ) }
                    </ol>
                </div>
            </div>
    )
}

export default List