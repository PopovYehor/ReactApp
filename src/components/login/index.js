import { useState } from "react"
import { useDispatch} from "react-redux/es/exports"
import "./style.scss"
function Login (){
    const [loginText, setLoginText] = useState('')
    const [passText, setPassText] = useState('')
    const [loginValidate, setLoginValidate] = useState(true)

    const dispatch = useDispatch()
    
    const data = {
        login: 'Admin',
        password: '12345',
        name: "Yehor",
        surname: "Popov",
        profesion: "JavaScript Junior Developer",
        fromLocation: "Ukraine",
        location: "Dnipro",
        following: 120,
        followerers: 100,
        articales: 22,
        posts: 15,
    }
    const checkData = ()=>{
        if (loginText != data.login || passText != data.password) {setLoginValidate(false)}
        else{
            setLoginValidate(true)
            dispatch({
                type: 'LOG_IN',
                payload: true,
            })
            dispatch({
                type: 'LOGIN_BTN',
                payload: "Account",
            })
            dispatch({
                type: 'USER_DATA',
                payload: data
            })
            sessionStorage.setItem('login', true)
            sessionStorage.setItem('loginText', "Account")
            sessionStorage.setItem('userData', JSON.stringify(data))
        }
    }
    return(
        <div className="login-wrap">
            <div className="login-container">
                <div className={loginValidate? "input-wrap" : "input-wrap alert-validate"} id="login-wrap" data-validate = "Incorect login or password">
                    <input value = {loginText} onChange = {(e)=>setLoginText(e.target.value)} className="input-item" placeholder="Login" id="login"></input>
                </div>
                <div className={loginValidate ? "input-wrap" : "input-wrap alert-validate"} id="pass-wrap" data-validate = "Incorect login or password">
                    <input value = {passText} onChange = {(e)=>setPassText(e.target.value)} className="input-item" placeholder="Password" type="password" id="password"></input>
                </div>
                <div className="login-btn-wrap">
                    <button onClick={()=>checkData()} className="login-btn">Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login