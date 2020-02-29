import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/navbar";
import UserProfile from "../profile/userProfile";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import './companyPanel.css';


class CompanyPanel extends Component {
  constructor(){
    super();
  }

  _onSubmit = event => {
    event.preventDefault();
    this.props.LogoutDispatch();
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.authReducer && !nextProps.authReducer.user.email){
      this.props.history.push('/')
    }
  }

  render() {
    return this.props.authReducer.isLoading ? (
      <div className="loader"></div>
    ) : (
      <div>
         <Navbar  type={this.props.authReducer.user.type} />
         <div className="container">
         <UserProfile authReducer={this.props.authReducer}/>
       {/* <form className="form" onSubmit={this._onSubmit}>
          <h1>This is company panel</h1>
          <h1>User Details</h1>
          <div>Email : {this.props.authReducer.user.email}</div>
          <div>Full Name : {this.props.authReducer.user.firstName} {this.props.authReducer.user.lastName}</div>
          <input type="submit" value="LOGOUT" />
        </form> */}
      </div>

    </div>
     
    );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LogoutDispatch: data => dispatch(AuthMiddleWare.logout(data))
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyPanel);