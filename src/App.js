import './App.css';
import React, {useState} from 'react';
import CheckUser from './components/CheckUser';
import ToDoList from './components/ToDoList';
import {usersData} from "./helper/userData"

function App() {
  const [isName, changeIsName] = useState(false)
  
  const checkName = (selector)=>{
    let userValue = document.querySelector(selector).value
    for (let i = 0; i< usersData.length; i++){
      if (userValue === usersData[i].name) {
        sessionStorage.setItem('userName', usersData[i].name)
        sessionStorage.setItem('userID', usersData[i].id)
        let userID = sessionStorage.getItem('userID')
        sessionStorage.setItem('userTask', JSON.stringify(usersData[userID].task))
        sessionStorage.setItem('userCheck', JSON.stringify(usersData[userID].check))
        changeIsName(true)
        break
      }
    }
  }
  
  return (
    <div className='App'>
      <div className='container'>
         <CheckUser checkName={()=>checkName('.login-area')}/>
         {isName ? <ToDoList/> : null}
      </div>
    </div>
  );
}

export default App;
