const initialState = {
    movies: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies
            }
        default:
            return state;
    }
}
