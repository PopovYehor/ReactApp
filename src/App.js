import './App.css';
import Title from './components/title';
import Input from './components/input';
import Button from './components/button';
import List from './components/list';
function App() {
  return (
    
    <div className='App'>
      <div className='container'>
          <Title classContainer = "title-container" titleClass= "title" titleText= "Мои заметки"/>
        <div className='login'>
          <Input class = "login-area input-item" placeholder = "Введите имя пользователя"></Input>
          <Button class = "btn-login btn"  text = "Вход"/>
        </div>
        <div className='add-do'>
          <Input class = 'add-do-area input-item' placeholder = 'Добавить заметку'/>
          <Button class='btn-add btn' text ="+"/>
        </div>
        <div className='to-do-list-container'>
            <Title classContainer='title-list-container' titleClass='list-title' titleText='Список дел пользователя' />
            <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
