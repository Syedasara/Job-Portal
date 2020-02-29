import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router , Route, NavLink} from 'react-router-dom'
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import Navbar from "../navbar/navbar";
import UserProfile from "../profile/userProfile";
import './adminPanel.css';
import CompanyList from "../companyPanel/companyList";
import StudentList from '../studentPanel/studentList';
import Jobs from '../companyPanel/jobs';


class AdminPanel extends Component {
  constructor() {
    super();
  }

  // _onSubmit = event => {
  //   event.preventDefault();
  //   this.props.LogoutDispatch();
  // };

  componentWillReceiveProps(nextProps) {
    if (nextProps.authReducer && !nextProps.authReducer.user.email) {
      this.props.history.push('/')
    }
  }

  viewAllCompanies() {
    this.props.viewAllCompaniesData()
  }

  render() {
    return this.props.authReducer.isLoading ? (
      <div className="loader"></div>
    ) : (
        <div>
          <Navbar type={this.props.authReducer.user.type} />
          {/* <button> */}
          {/* <NavLink to='/adminpanel'>Profile</NavLink>
          </button>
          <button>
          <NavLink to='/job_posts'>Jobs</NavLink>
          </button>
          <button>
          <NavLink to='/student_list'>Student List</NavLink>
          </button>
          <button>
          <NavLink to='/company_list'>Company List</NavLink>
          </button>
          <button>
            Log Out
          </button> */}
          <div className="container">
            {/* <form className="form" onSubmit={this._onSubmit}> */}
            {/* <h1>This is admin panel</h1> */}
            <UserProfile authReducer={this.props.authReducer}/>

            {/* <CompanyList/> */}
            {/* <button onClick={() => this.viewAllCompanies()}>View all Companies</button>
              <h2>Company List</h2>
              {this.props.companiesData && this.props.companiesData.allCompanies && this.props.companiesData.allCompanies.length && this.props.companiesData.allCompanies.map(data => {
                return  <ul>
                          <li>{data.email}</li>
                        </ul>
              })} */}
            {/* <h1>User Details</h1>
              <div>Email : {this.props.authReducer.user.email}</div>
              <div>Full Name : {this.props.authReducer.user.firstName} {this.props.authReducer.user.lastName}</div> */}
            {/* <input type="submit" value="LOGOUT" /> */}
            {/* </form> */}
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    // companiesData : state.viewDataReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // LogoutDispatch: data => dispatch(AuthMiddleWare.logout(data)),
    // viewAllCompaniesData : () => dispatch(ViewDataMiddleware.viewAllCompanies())
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);