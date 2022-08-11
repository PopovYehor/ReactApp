import './App.css';
import React, {useState} from 'react';
import CheckUser from './components/CheckUser';
import ToDoList from './components/ToDoList';
import {usersData} from "./helper/userData"
function App() {
  let [isName, changeIsName] = useState(false)
  const checkName = (selector)=>{
    let elem = document.querySelector(selector).value
    if (elem === usersData[0].name) {changeIsName(true)}
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
