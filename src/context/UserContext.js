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



const UserContext = createContext()

const UserProvider = ({ children }) => {
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
        const photoURL = payload.photoURL ? payload.photoURL : state.user.photoURL
        const displayName = payload.displayName ? payload.displayName : state.user.displayName
        updateProfile(auth.currentUser, {displayName,photoURL})
        .then(() => {
        }).catch((error) => {
            console.log(error);
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