import "./style.css"
import React, {useState} from 'react'
let usersData = [
    {id: 0 ,name: 'Егор', task: ['Встать','Пойти','Прийти','Лечь',], check: [false, false, true, true]},
    {id: 1, name: 'Федя', task: ['Почистить зубы','Попить воды'], check: [true, true]},
    {id: 2, name: 'Вася', task: ['Быть Васей', 'Сходить на работу', 'Получить зарплату', 'Выпить пиво'], check: [true, false, false, true]},
]

function List (props){
    const [users , setUser] = useState(usersData)
return(
    <div className="do-list">
        <ol className="list">
            {users[0].task.map((elem, i )=> <li key={users[0].id} className={users[0].check[i] == false ? "list-item" : "list-item done"}>{elem}</li>)}
        </ol>
    </div>
)
}

export default List