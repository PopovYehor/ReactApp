import './App.css';
import './style.css'
import React, {useState} from 'react';
import CheckUser from './components/CheckUser';
import ToDoList from './components/ToDoList';
import {usersData, newUser} from "./helper/userData"

function App() {
  const [isName, changeIsName] = useState(false)
  const userSignIn = sessionStorage.getItem('userName')
  const checkName = (selector)=>{
    let userValue = document.querySelector(selector).value
    let UserDataElement = ''
    usersData.some( elem => {if (elem.name === userValue) UserDataElement = elem})
      if (UserDataElement){
        sessionStorage.setItem('userName', UserDataElement.name)
        sessionStorage.setItem('userID', UserDataElement.id)
        sessionStorage.setItem('userTask', JSON.stringify(UserDataElement.task))
        sessionStorage.setItem('userCheck', JSON.stringify(UserDataElement.check))
        changeIsName(true)
      }
      else{
        newUser.name = userValue
        sessionStorage.setItem('userName', newUser.name)
        newUser.id = Date.now()
        sessionStorage.setItem('userID', newUser.id)
        sessionStorage.setItem('userTask', JSON.stringify(newUser.task))
        sessionStorage.setItem('userCheck', JSON.stringify(newUser.check))
        usersData.push(newUser)
        changeIsName(true)
      }
      
  }
  
  return (
    <div className='App'>
      <div className='container'>
        {isName || userSignIn ? <ToDoList/>
        : <CheckUser checkName={()=>checkName('.login-area')}/>}
      </div>
    </div>
  );
}

export default App;
