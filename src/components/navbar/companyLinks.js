import React from 'react'
import {  Route, BrowserRouter as Router, Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthMiddleWare from "../../store/middlewares/authMiddleware";


class CompanyLinks extends React.Component{
    constructor(){
        super();
      }
    _onSubmit = event => {
        event.preventDefault();
        alert("Are you sure you want to exit")
        this.props.LogoutDispatch();
      };
    render(){
    
    return (
        <div>
            <ul className="right">     
                    <li><Link to="/companypanel">Profile</Link></li>
                    <li><Link to='/post_job'>Post job</Link></li>
                    {/* <li><Link to='#'>Candidates</Link></li> */}
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

  export default connect(null,mapDispatchToProps)(CompanyLinks)
  