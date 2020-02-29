import ProjectActions from "../actions/projectActions";
import * as firebase from "firebase";

class ProjectMiddleware {
    static addPost(project){
        return dispatch => {
            dispatch(ProjectActions.addPost(true))
            let i =  firebase.database().ref().child("/projects").push();
            let pid = i.getKey();
            i.set({
            id:pid,
            username: project.company_name,
            title: project.title,
            detail: project.detail,
          })
          .then(() => {
            dispatch(ProjectActions.postSuccess("Your ad has been posted"));
          }).catch(err => {
            dispatch(ProjectActions.postFailure(err));
          });
      
        }
      }
      static deletePost(id) {
          return dispatch => {
            dispatch(ProjectActions.deletePost(true))
            firebase.database().ref().child("/projects").child(id).remove()
              .then(user => dispatch(ProjectActions.deletePostSuccess(user)))
              .catch(error => dispatch(ProjectActions.deletePostFailure(error)))
          }
        }

      static appliedPost(id,state) {
        return dispatch => {
          dispatch(ProjectActions.appliedPost(true))
          firebase.database().ref().child("/users").child(id).push({
            apply:state
          })
            .then(user => dispatch(ProjectActions.appliedPostSuccess(user)))
            .catch(error => dispatch(ProjectActions.appliedPostFailure(error)))
        }
      }
    };

      export default ProjectMiddleware

//      
   
