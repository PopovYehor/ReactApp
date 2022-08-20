import "./style.css"
import Title from "../title"
import Input from "./input"
import Button from "./button"
import React, {useState} from "react"


function CheckUser(props){
    const [textLogin, setTextLogin] = useState('')
    
    return(
        <div className="check-user-wrap">
            <Title classContainer = "title-container" titleClass= "title" titleText= "Мои заметки"/>
            <div className='login'>
                <Input value = {textLogin} func = {(e)=>setTextLogin(e.target.value)}   class = "login-area input-item" placeholder = "Введите имя пользователя"></Input>
                <Button class = "btn-login btn" func = {()=>props.checkName()} text = "Вход"/>
            </div>
        </div>
    )
}

export default CheckUser