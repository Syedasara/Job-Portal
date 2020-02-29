import UserActions from "../actions/userActions";
import * as firebase from "firebase";

class UserMiddleware {
  static deleteUser(id) {
    return dispatch => {
      dispatch(UserActions.deleteUser(true))
      firebase.database().ref().child("/users").child(id).remove()
        .then(user => dispatch(UserActions.deleteUserSuccess(user)))
        .catch(error => dispatch(UserActions.deleteUserFailure(error)))
    }
  }

  static UpdateUser(id, data) {
    return dispatch => {
      dispatch(UserActions.updateUser(true))
      firebase.database().ref().child("/users").child(id).update({
        // email: data.email,
        // password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        // type: data.type,
      })
        .then(user => dispatch(UserActions.updateUserSuccess(user)))
        .catch(error => dispatch(UserActions.updateUserFailure(error)))
    }
  }
}
export default UserMiddleware