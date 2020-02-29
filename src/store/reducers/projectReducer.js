import {
    ADD_POST,
    POST_FAILURE,
    POST_SUCCESS,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    APPLIED_POST,
    APPLIED_POST_SUCCESS,
    APPLIED_POST_FAILURE
} from "../constants";

const initialState = {
    projects: {},
    isLoading: false,
    // isError: false,
    message: {},
    user:{}
};

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
       
        case ADD_POST:
        case APPLIED_POST:
        case DELETE_POST :
            return {
                ...state,
                isLoading: true,
                message: {}
            }

        case POST_SUCCESS:
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // isError: false,
                message: action.payload
            };

        case POST_FAILURE:
        case APPLIED_POST_FAILURE:
        case DELETE_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                // isError: false,
                message: action.payload
            };

        case APPLIED_POST_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    // isError: false,
                    user: action.payload
                };
       

       default:
       return state;


    }
}