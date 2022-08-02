import "./style.css"
let count = 0
const activeMenu = () => {
  const menu = document.querySelector('.left-menu')
  if (count == 0) {
    menu.classList.add('active')
    count = 1}
    else{
      menu.classList.remove('active')
      count = 0
    };
    /* count == 0 ? (menu.classList.add('active'), count = 1) : (menu.classList.remove('active'), count = 0) */ 

    /*Подскажите почему не работает это тернарное выражение? Ошибка: Expected an assignment or function call and instead saw an expression*/
}

function LeftMenu (props){
    return (
        <div className ="left-menu">
            <p>{props.item}</p>
        </div>
    )
}
export {LeftMenu, activeMenu}