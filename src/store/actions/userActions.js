import {
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE, 
} from "../constants";

class UserActions {

    static deleteUser(data) {
        return {
            type: DELETE_USER,
            payload: data
        };
    }

    static deleteUserSuccess(data) {
        return {
            type: DELETE_USER_SUCCESS,
            payload: data
        };
    }

    static deleteUserFailure(error) {
        return {
            type: DELETE_USER_FAILURE,
            error: error
        }
    }

    static updateUser(data) {
        return {
            type: UPDATE_USER,
            payload: data
        };
    }

    static updateUserSuccess(data) {
        return {
            type: UPDATE_USER_SUCCESS,
            payload: data
        };
    }

    static updateUserFailure(error) {
        return {
            type: UPDATE_USER_FAILURE,
            error: error
        };
    }

}
export default UserActions