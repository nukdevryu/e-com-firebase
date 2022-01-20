import React, { createContext, useReducer } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import reducer from './userReducer'



const UserContext = createContext()

const initialState = {
    userCurrent: {},
    user: {},
    isLogin: false
}

const UserProvider = ({ children }) => {
    const auth = getAuth()

    const [state, dispatch] = useReducer(reducer, initialState)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid
            console.log(uid);
        } else {
            console.log('response failed')
        }
    })

    const userLogin = payload => {
        signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                dispatch({ type: 'LOGIN', payload: userCredential.user })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    const userRegister = payload => {
        createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                dispatch({ type: 'LOGIN', payload: userCredential.user })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    const userLogout = () => { }

    const getUser = payload => { }

    const userMethods = {
        ...state,
        userLogin,
        userRegister,
        userLogout
    }

    return (
        <UserContext.Provider value={userMethods}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
module.exports = UserContext