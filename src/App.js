import './App.css';
import Header from './components/header';
import Content from './components/content';
import {LeftMenu, activeMenu} from './components/leftMenu';



function App() {
  return (
    <div className='App'>
    <Header title = "My Header" menuActive = {activeMenu}/>
    <div className = "container">
      <LeftMenu item ="Menu item"/>
      <Content text = 'Main text'/>
    </div>
    </div>
  );
}

export default App;
