import React, { createContext, useEffect, useReducer } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import reducer from './userReducer'
import { app } from '../config/firebase'



const UserContext = createContext()

const UserProvider = ({ children }) => {
    const initApp = app
    const auth = getAuth()


    const initialState = {
        user: {},
        isLogin: auth.currentUser ? true : false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const userLogin = payload => {
        signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                dispatch({ type: 'LOGIN', payload: userCredential.user })
            })
            .catch((error) => {
                // const errorCode = error.code
                // const errorMessage = error.message
            })
    }

    const userRegister = payload => {
        console.log('works!');
        createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                console.log(userCredential.uid)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(`error code: ${errorCode}, error message: ${errorMessage}`)
            })
    }

    const userLogout = () => { }

    const getUser = payload => { }

    useEffect( async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({type: 'SET_USER', payload: user})
            } else {
                dispatch({type: 'LOGOUT'})
            }
        })
    }, [])

    const userMethods = {
        ...state,
        userLogin,
        userRegister,
        userLogout
    }

    return (
        <UserContext.Provider value={{ userMethods }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export { UserContext }