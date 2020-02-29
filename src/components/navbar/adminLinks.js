import React from 'react'
import {  Route, BrowserRouter as Router, Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
//  import CompanyList from '../companyPanel/companyList';


class AdminLinks extends React.Component{
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
                    <li><Link to='/adminpanel'>Profile</Link></li>          
                    <li><Link to='/job_posts'>Jobs</Link></li>
                    <li><Link to='/student_list'>Student List</Link></li>
                    <li><Link to='/company_list'>Company List</Link></li>     
                    <li><a onClick={this._onSubmit}>Log Out</a></li>             
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

  
  export default connect(null,mapDispatchToProps)(AdminLinks)