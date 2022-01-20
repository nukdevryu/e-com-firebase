import React, { createContext, useEffect, useReducer } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail
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
            })
    }

    const userRegister = payload => {
        console.log('works!');
        createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                sendEmailVerification(auth.currentUser)
                    .then(() => { })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(`error code: ${errorCode}, error message: ${errorMessage}`)
            })
    }

    const userLogout = () => {
        signOut(auth)
    }

    const getUser = payload => {
        if (!payload.emailVerified)
            window.alert('you arent verify')
        dispatch({ type: 'SET_USER', payload })
    }

    const updateUser = payload => {
        const imgProfile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU'
        updateProfile(auth.currentUser, {
            displayName: "Error Dev",
            photoURL: imgProfile
        }).then(() => {
        }).catch((error) => {
        })
    }

    const userForgotPassword = payload => {
        sendPasswordResetEmail(auth, 'nukdev.ryu@gmail.com')
            .then(() => {
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    useEffect(async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                getUser(user)
            } else {
                signOut(auth)
                dispatch({ type: 'LOGOUT' })
            }
        })
    }, [])

    const userMethods = {
        ...state,
        userLogin,
        userRegister,
        userLogout,
        updateUser,
        userForgotPassword
    }

    return (
        <UserContext.Provider value={{ userMethods }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export { UserContext }