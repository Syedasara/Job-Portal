import React, { Component } from "react";
import { connect } from "react-redux";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import UserProfile from "../profile/userProfile";
import Navbar from "../navbar/navbar";
import './studentPanel.css';


class StudentPanel extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  

  _onSubmit = event => {
    event.preventDefault();
    this.props.LogoutDispatch();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.authReducer && !nextProps.authReducer.user.email) {
      this.props.history.push('/')
    }
  }

  render() {
    return this.props.authReducer.isLoading ? (
      <div className="loader"></div>
    ) : (
        <div>
          <Navbar type={this.props.authReducer.user.type} />
          <div className="container">
            {/* <form className="form" onSubmit={this._onSubmit}> */}
              {/* <h1>This is student panel</h1> */}
              <UserProfile authReducer={this.props.authReducer} />
              {/* <h1>User Details</h1>
              <div>Email : {this.props.authReducer.user.email}</div>
              <div>Full Name : {this.props.authReducer.user.firstName} {this.props.authReducer.user.lastName}</div>
              <input type="submit" value="LOGOUT" /> */}
            {/* </form> */}
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
)(StudentPanel);