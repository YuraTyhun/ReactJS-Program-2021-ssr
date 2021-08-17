import {
    OPEN_MODAL,
    CLOSE_MODAL,
    SHOW_MOVIE_DETAILS,
    CLOSE_MOVIE_DETAILS,
    SET_SORT_BY,
    SET_FILTER,
    GET_MOVIES_SUCCESS,
    GET_MOVIE_BY_ID_SUCCESS,
    SET_SEARCH_VALUE
} from '../actions/actionTypes';

export const initialState = {
    activeMovie: null,
    activeModal: false,
    detailsMovie: null,
    totalAmount: null,
    sortBy: 'release_date',
    filter: '',
    search: '',
    movies: []
};

const movie = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                activeModal: action.payload.activeModal,
                activeMovie: action.payload.activeMovie
            }
        case CLOSE_MODAL:
            return {
                ...state,
                activeModal: false,
                activeMovie: null
            };
        case SHOW_MOVIE_DETAILS:
            return {
                ...state,
                detailsMovie: action.payload
            };
        case CLOSE_MOVIE_DETAILS:
            return {
                ...state,
                detailsMovie: null
            };
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case SET_SEARCH_VALUE:
            return {
                ...state,
                search: action.payload
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload.data,
                totalAmount: action.payload.totalAmount
            };
        case GET_MOVIE_BY_ID_SUCCESS:
            return {
                ...state,
                detailsMovie: action.payload
            };

        default:
            return state;
    }
}

export default movie;