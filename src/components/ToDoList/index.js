import "./style.css"
import Button from "../CheckUser/button"
import Input from "../CheckUser/input"
import React, {useState} from 'react'
import List from "./list"
import {usersData} from "../../helper/userData"

function ToDoList (){
    const userID = sessionStorage.getItem('userID')
    let userTask = JSON.parse(sessionStorage.getItem('userTask'))
    let userCheck = JSON.parse(sessionStorage.getItem('userCheck')) 
    const [isUserTask, setUserTask] = useState(userTask)
    const [isUserCheck, setUserCheck] = useState(userCheck)
    const [textAddDo, setTextAddDo] = useState('')

    const addTask = (text)=>{
        setUserTask(array => [...array, text])
        setUserCheck(array => [...array, false])
        usersData.some(elem => {
            if (elem.id == userID){
                elem.task.push(text)
                elem.check.push(false)
            }
        })
        const task = [...isUserTask, text]
        const check = [...isUserCheck, false]
        sessionStorage.setItem('userTask', JSON.stringify(task))
        sessionStorage.setItem('userCheck', JSON.stringify(check))
    }

    const changeCheck = (i)=>{
        setUserCheck(item =>{
            return item.map((element, j)=>{
                return i === j ? element = !element : element = element
            })
        })
        const changeArrCheck = isUserCheck.map((element, j)=>{
            return i === j ? element = !element : element = element
        })
        usersData.some(elem => {
            if (elem.id == userID){
                elem.check = changeArrCheck
            }
        })
        sessionStorage.setItem('userCheck', JSON.stringify(changeArrCheck))
    }
    return (
        <div className="to-do-list-wrap">
            <div className='add-do'>
                <Input value = {textAddDo} func = {(e)=>setTextAddDo(e.target.value)} class = 'add-do-area input-item' placeholder = 'Добавить заметку'/>
                <Button class='btn-add btn' func = {()=>{addTask(textAddDo)}} text ="+"/>
            </div>
                <List task = {isUserTask} check = {isUserCheck} change = {changeCheck}/>
        </div>
    )
}

export default ToDoList