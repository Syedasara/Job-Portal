import ViewDataActions from "../actions/viewDataAction";
import * as firebase from "firebase";

class ViewDataMiddleware {

    static viewAllCompanies(data){
        return dispatch => {
            dispatch(ViewDataActions.viewAllCompanies(true))
            firebase.auth().onAuthStateChanged(() => {
                firebase.database().ref("users").on('value', snap => {
                  console.log(snap.val())
                  let allUsers = snap.val();
                  let allCompaniesObj = {}
          
                  for(let key in allUsers){
                    if(allUsers[key].type == "company"){
                      allCompaniesObj[key] = allUsers[key]
                    }
                  }
          
                  let allCompaniesArr = [];
                  for(let key in allCompaniesObj){
                    allCompaniesArr.push(allCompaniesObj[key])
                  }
                  // allCompaniesArr.push(allCompaniesObj)

                dispatch(ViewDataActions.viewAllCompaniesSuccess(allCompaniesArr))
                })
                // .catch(error  => dispatch(ViewDataActions.viewAllCompaniesFailure(error)))
            })
        }
    }


    static viewAllStudents(data){
      return dispatch => {
          dispatch(ViewDataActions.viewAllStudents(true))
          firebase.auth().onAuthStateChanged(() => {
              firebase.database().ref("users").on('value', snap => {
                let allUsers = snap.val();
                let allStudentsObj = {}
        
                for(let key in allUsers){
                  if(allUsers[key].type == "student"){
                    allStudentsObj[key] = allUsers[key]
                  }
                }
        
                let allStudentsArr = [];
                for(let key in allStudentsObj){
                  allStudentsArr.push(allStudentsObj[key])
                }
              dispatch(ViewDataActions.viewAllStudentsSuccess(allStudentsArr))
              })
              // .catch(error  => dispatch(ViewDataActions.viewAllStudentsFailure(error)))
          })
      }
  }

  static viewCandidates(data){
    return dispatch => {
        dispatch(ViewDataActions.viewCandidates(true))
        firebase.auth().onAuthStateChanged(() => {
            firebase.database().ref("users").on('value', snap => {
              let allUsers = snap.val();
              let candidatesObj = {}
      
              for(let key in allUsers){
                if(allUsers[key].type == "student"){
                  candidatesObj[key] = allUsers[key]
                }
              }
      
              let candidatesArr = [];
              for(let key in candidatesObj){
                candidatesArr.push(candidatesObj[key])
              }
            dispatch(ViewDataActions.viewCandidatesSuccess(candidatesArr))
            })
            // .catch(error  => dispatch(ViewDataActions.viewCandidatesFailure(error)))
        })
    }
}

  static viewAllProjects(data){
    return dispatch => {
        dispatch(ViewDataActions.viewAllProjects(true))
        firebase.auth().onAuthStateChanged(() => {
            firebase.database().ref("projects").on('value', snap => {
              let allProjects = snap.val();
              let allProjectsObj = {}
      
              for(let key in allProjects){
                allProjectsObj[key] = allProjects[key]
              }
      
              let allProjectsArr = [];
              for(let key in allProjectsObj){
                allProjectsArr.push(allProjectsObj[key])
              }
            dispatch(ViewDataActions.viewAllProjectsSuccess(allProjectsArr))
            })
            // .catch(error  => dispatch(ViewDataActions.viewAllCompaniesFailure(error)))
        })
    }
}
}

export default ViewDataMiddleware;