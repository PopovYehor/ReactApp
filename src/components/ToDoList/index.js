import "./style.css"
import Title from "../title"
import React, {useEffect, useState} from 'react'
import Check from './check/index'
import {usersData} from "../../helper/userData"

function ToDoList (){
    const [users] = useState(usersData)
    return (
        <div className='to-do-list-container'>
            <Title classContainer='title-list-container' titleClass='list-title' titleText={`Список дел пользователя ${users[0].name}`} />
            <div className="do-list">
                <ol className="list">
                    {users[0].task.map((elem, i )=> <li key={i} className={users[0].check[i] === false ? "list-item" : "list-item done"}>{elem} <Check check= {users[0].check[i] === true}/></li> ) }
                </ol>
            </div>
        </div>
    )
}

export default ToDoList