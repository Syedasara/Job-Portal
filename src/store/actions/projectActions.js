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

class ProjectActions {

    static addPost(data) {
        return {
            type: ADD_POST,
            payload: data
        };
    }

    static postSuccess(data) {
        return {
            type: POST_SUCCESS,
            payload: data
        };
    }

    static postFailure(error) {
        return {
            type: POST_FAILURE,
            error: error
        }
    }
    

    static deletePost(data) {
        return {
            type: DELETE_POST,
            payload: data
        };
    }

    static deletePostSuccess(data) {
        return {
            type: DELETE_POST_SUCCESS,
            payload: data
        };
    }

    static deletePostFailure(error) {
        return {
            type: DELETE_POST_FAILURE,
            error: error
        };
    }

    static appliedPost(data) {
        return {
            type: APPLIED_POST,
            payload: data
        };
    }

    static appliedPostSuccess(data) {
        return {
            type: APPLIED_POST_SUCCESS,
            payload: data
        };
    }

    static appliedPostFailure(error) {
        return {
            type: APPLIED_POST_FAILURE,
            error: error
        };
    }

    // static fetchPost(data) {
    //     return {
    //         type: FETCH_POST,
    //         payload: data
    //     };
    // }

    // static fetchSuccess(data) {
    //     return {
    //         type: FETCH_SUCCESS,
    //         payload: data
    //     };
    // }

    // static fetchFailure(error) {
    //     return {
    //         type: FETCH_FAILURE,
    //         error: error
    //     };
    // }

}
export default ProjectActions