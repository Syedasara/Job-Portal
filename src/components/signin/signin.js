import React from 'react';
import { Link } from 'react-router-dom'
import './signin.css';
import { connect } from "react-redux";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
          email : "",
          password : "",
          siginError : false
        }
      }
    submission(e) {
        e.preventDefault()
        let data = {
          email : this.state.email,
          password : this.state.password,
        }
        this.props.SignInDispatch(data)
      }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.authReducer && nextProps.authReducer.user && nextProps.authReducer.user.email){
          if(nextProps.authReducer.user.type === "student") {
            this.props.history.push('/studentpanel')
          }
          else if (nextProps.authReducer.user.type === "company"){
            this.props.history.push('/companypanel')
          }
          else {
            this.props.history.push('/adminpanel')
          }
        }
        if(nextProps.authReducer && nextProps.authReducer.error.message){
          this.setState({
            siginError : true
          })
        }
    }
    render(){
        return this.props.authReducer.isLoading ? (<div className="loader"></div>)
            :
            (<div className="main-container">
              <form className="Form" onSubmit={(e) => this.submission(e)}>
                  <fieldset className="input">
                      <h2 className="title"><strong>SignIn</strong></h2>

                      <div class="input-field col s6 m6">
                      <input className="check" type="email" required="required" 
                          onChange={e => this.setState({ email: e.target.value, siginError : false })} />
                        <label for="first">E-mail</label>
                      </div>
                                    
                      <div class="input-field col s6 m6">
                      <input className="check" type="password" required="required"
                          onChange={e => this.setState({ password: e.target.value, siginError : false  })} />
                           <label for="first">Password</label>
                      </div>
                     
                      <input type="submit" value="Sign In" />
                      
                      <Link to="/signup">
                          <p className="text-para">Create an account</p>
                      </Link>
                      {this.state.siginError && <p className="error"> *Invalid E-mail or Password</p>}
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
        SignInDispatch: data => dispatch(AuthMiddleWare.signIn(data))
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn);
