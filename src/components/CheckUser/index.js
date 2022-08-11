import "./style.css"
import Title from "../title"
import Input from "./input"
import Button from "./button"
import React, {useState} from "react"
import {usersData} from "../../helper/userData"

function CheckUser(props){
    const [textLogin, setTextLogin] = useState('')
    const [textAddDo, setTextAddDo] = useState('')

    return(
        <div className="check-user-wrap">
            <Title classContainer = "title-container" titleClass= "title" titleText= "Мои заметки"/>
            <div className='login'>
                <Input value = {textLogin} func = {(e)=>setTextLogin(e.target.value)}   class = "login-area input-item" placeholder = "Введите имя пользователя"></Input>
                <Button class = "btn-login btn" func = {()=>props.checkName()} text = "Вход"/>
            </div>
            <div className='add-do'>
                <Input value = {textAddDo} func = {(e)=>setTextAddDo(e.target.value)} class = 'add-do-area input-item' placeholder = 'Добавить заметку'/>
                <Button class='btn-add btn' text ="+"/>
            </div>
        </div>
    )
}

export default CheckUser