import "./style.css"
import Button from "../CheckUser/button"
import Input from "../CheckUser/input"
import React, {useState} from 'react'
import List from "./list"
import {usersData} from "../../helper/userData"

function ToDoList (){
    let userID = sessionStorage.getItem('userID')
    const [user, setUser] = useState(usersData[userID])
    const [textAddDo, setTextAddDo] = useState('')
    const addTask = (selector)=>{
        console.log(user)
        let elem = document.querySelector(selector).value
        user.task.push(elem)
        user.check.push(false)
        sessionStorage.setItem('userTask', JSON.stringify(user.task))
        sessionStorage.setItem('userCheck', JSON.stringify(user.check))
        setUser()
    }

    return (
        <div className="to-do-list-wrap">
            <div className='add-do'>
                <Input value = {textAddDo} func = {(e)=>setTextAddDo(e.target.value)} class = 'add-do-area input-item' placeholder = 'Добавить заметку'/>
                <Button class='btn-add btn' func = {()=>{addTask('.add-do-area ')}} text ="+"/>
            </div>
                <List/>
        </div>
    )
}

export default ToDoList