const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }

        case 'LOGOUT':
            return { ...state, user: {}, isLogin: false }

        case 'SET_USER':
            return {...state, user: action.payload, isLogin: true}

        default:
            return state
    }
}
export default reducer