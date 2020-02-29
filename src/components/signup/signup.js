import React from 'react';
import { Link } from 'react-router-dom'
import './signup.css';
import { connect } from "react-redux";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      type: "",
      signupError : ""
    }
  }

  submission(e) {
    e.preventDefault()
    let data = {
      email : this.state.email,
      password : this.state.password,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      type : this.state.type
    }
    this.props.SignUpDispatch(data)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.authReducer && nextProps.authReducer.error && nextProps.authReducer.error.message){
      this.setState({
        signupError : nextProps.authReducer.error.message
      })
    }
}

  render(){
    return this.props.authReducer.isLoading ? (<div className="loader"></div>)
      :
        (<div className="main-container">
          <form className="Form" onSubmit={(e) => this.submission(e)}>
            <fieldset className="input">
              
              <h1 className="title"><strong>SignUp</strong></h1>

              <div class="input-field col s6 m6">
              <input className="check" type="text" required="required"
                  onChange={e => this.setState({ firstName: e.target.value, signupError : ""})} />
               <label for="first">First Name</label>
              </div>
              
              <div class="input-field col s6 m6">
              <input className="check" type="text" required="required" 
                  onChange={e => this.setState({ lastName: e.target.value, signupError :""})} />
               <label for="first">Last Name</label>
              </div>
              
               <div class="input-field col s6 m6">
               <input className="check" type="text" required="required" 
                  onChange={e => this.setState({ email: e.target.value, signupError : ""})} />
               <label for="first">E-mail</label>
              </div>

               <div class="input-field col s6 m6">
               <input  className="check" type="password" required="required" 
                  onChange={e => this.setState({ password: e.target.value, signupError :""})} />
              <label for="first">Password</label>
              </div>

              <div class="input-field col s6 m6">
                        <p>
                            <label>
                                <input name="type" class="with-gap" type="radio" value ="company" onChange={(e) => this.setState({ type : e.target.value})}  />
                                <span>Company</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="type" class="with-gap" type="radio" value ="student" onChange={(e) => this.setState({ type : e.target.value})}  />
                                <span>Job Seeker</span>
                            </label>
                        </p>
                    </div>

              {/* <input type="radio" name="type" value="student" onChange={(e) => this.setState({ type : e.target.value})} /> Student
              <input type="radio" name="type" value="company" onChange={(e) => this.setState({ type : e.target.value})} /> Company */}
              
              <input type="submit" value="Signup" />  

              <p className="text-para">Already have an account?
                <Link to="/">
                  Login!
                </Link>
              </p>
              {this.state.signupError ? <p className="error"> *{this.state.signupError}</p> 
                : null }
               

            </fieldset>
          </form>
        </div>)
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SignUpDispatch: data => dispatch(AuthMiddleWare.signUp(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
