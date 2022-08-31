import { LOG_IN, USER_DATA, LOGIN_BTN  } from "../user/type"

const defaultState = {
    login: sessionStorage.getItem('login') || false,
    loginBtn: sessionStorage.getItem('loginText') || 'Log In',
    user: JSON.parse(sessionStorage.getItem('userData')) || {}
}

const reducerUser = (state = defaultState, action) => {
    switch (action.type){
        case LOG_IN:
            return {...state, login: action.payload}
        case USER_DATA:
            return {...state, user: action.payload}
        case LOGIN_BTN:
            return {...state, loginBtn: action.payload}
        default:
            return state
    }
}

export {reducerUser}