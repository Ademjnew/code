const initialState = {
    user: {},
    isAuth: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuth: Object.keys(action.user).length > 0 ? true : false,
                user: action.user
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        default:
            return state;
    }
}
