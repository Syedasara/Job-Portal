import React from 'react'
import {  Route, BrowserRouter as Router, NavLink , Redirect, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthMiddleWare from "../../store/middlewares/authMiddleware";


class StudentLinks extends React.Component{
    constructor(){
        super();
      }
    _onSubmit = event => {
        event.preventDefault();
        alert("Are you sure you want to exit")
        this.props.LogoutDispatch();
      };
    render(){    
      console.log("student links")
    return (
        <div>
            
            <ul className="right">       
                    <li><NavLink to='/studentpanel'>Profile</NavLink></li>
                    <li><Link to='/job_posts'>Find Jobs</Link></li>
                    <li><a onClick={this._onSubmit}>Log Out</a></li>  
                    {/* <li><NavLink to='#' className="btn btn-floating pink lighten-1">NN</NavLink></li> */}
            </ul>       
                
        </div>
    )
}
}

function mapDispatchToProps(dispatch) {
    return {
      LogoutDispatch: data => dispatch(AuthMiddleWare.logout(data))
    };
  }

  export default connect(null,mapDispatchToProps)(StudentLinks)
