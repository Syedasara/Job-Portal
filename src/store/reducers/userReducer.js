import {
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
} from "../constants";

const initialState = {
    user: {},
    isLoading: false,
    // isError: false,
    message: {}
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        // case FETCH_POST:
        case DELETE_USER:
            return {
                ...state,
                // isLoading: true,
                message: {}
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                // isLoading: false,
                // isError: false,
                user: action.payload,
            };

        case DELETE_USER_FAILURE:
            return {
                ...state,
                // isLoading: false,
                // isError: false,
                message: action.payload
            };

        case UPDATE_USER:
            return {
                ...state,
                // isLoading: true,
                message: {}
            }

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                // isLoading: false,
                // isError: false,
                user: action.payload
            };

        case UPDATE_USER_FAILURE:
            return {
                ...state,
                // isLoading: false,
                // isError: false,
                message: action.payload
            };

        // case FETCH_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         // isError: false,
        //         projects: action.payload
        //     };

        default:
            return state;


    }
}