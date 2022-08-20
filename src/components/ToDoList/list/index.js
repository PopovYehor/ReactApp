import "./style.css"
import Title from '../../title'
function List ({task, check, change}){
    let userName = sessionStorage.getItem('userName')

    return(
        <div className='to-do-list-container'>
                <Title classContainer='title-list-container' titleClass='list-title' titleText={`Список дел пользователя ${userName}`} />
                <div className="do-list">
                    <ol className="list">
                        {task.map((elem, i )=> <li key={i} className={check[i] === false ? "list-item" : "list-item done"}>{elem} <input type="checkbox" onChange={()=>change(i)} className="check" checked={check[i] === true}></input></li> ) }
                    </ol>
                </div>
            </div>
    )
}

export default List