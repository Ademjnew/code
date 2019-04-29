import axios from 'axios'
import config from '../../config/config.json'

const url = config[process.env.NODE_ENV].api;


export function SignInUser(user_data,history) {
    return (dispatch) => {
        let data = {"user": user_data};
        axios.post(`${url}api/users/login`, data).then((res) => {
            let user = res.data
            console.log(user)
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({type: 'SET_USER', user})
            history.push('/')
        }).catch((err) => console.log(err))
    }
}

export function SignUpUser(user_data,history) {
    let data = {"user": user_data};
    return (dispatch) => {
        axios.post(`${url}api/users`, data).then((res) => {
            let user = res.data
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({type: 'SET_USER', user})
            history.push('/')
        }).catch((err) => console.log(err))
    }
}

export function logout() {
    // remove user from local storage to log user out
    return (dispatch) => {
        localStorage.removeItem('Auth');
        dispatch({type: 'LOGOUT',})
    }
}

export function getUploadsHistory() {
    // remove user from local storage to log user out
    return (dispatch, getState) => {
        let state = getState();
        const options = {
            headers: {
                'content-type': 'multipart/form-data',
                'x-access-token': state.authUser.isAuth ? state.authUser.user.token : ''
            }
        }
        axios.get(`${url}location/history`, options).then((res) => {
            let files = res.data.files;
            dispatch({type: 'GET_HISTORY', files})
        }).catch((err) => console.log(err))
    }
}
