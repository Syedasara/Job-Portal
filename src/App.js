import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/index";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route,Switch,withRouter } from 'react-router-dom'
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import StudentPanel from './components/studentPanel/studentPanel';
import CompanyPanel from './components/companyPanel/companyPanel';
import AdminPanel from './components/adminPanel/adminPanel';
import PostJob from './components/companyPanel/postJob';
import CompanyList from './components/companyPanel/companyList';
import Candidates from './components/companyPanel/candidates';
import StudentList from './components/studentPanel/studentList';
import Jobs from './components/companyPanel/jobs';
import UpdateProfile from "./components/profile/updateProfile"
import Notfound from "./components/notfound"

class App extends React.Component {
  constructor(){
    super();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.authReducer && nextProps.authReducer.user.email){
      return <Navbar/>
    }
  }
  render() {
    return (
     <div>

        <Header />
        <Router>
        <Switch>
        <Route exact path="/" component={SignIn} exact={true} />
        <Route path="/signup" component={SignUp} />
        <Route path="/studentpanel" component={StudentPanel} />
        <Route path="/companypanel" component={CompanyPanel} />
        <Route path="/adminpanel" component={AdminPanel} />
        <Route path="/post_job" component={PostJob} />
        <Route path="/company_list" component={CompanyList} />
        <Route path="/student_list" component={StudentList} />
        <Route path="/job_posts" component={Jobs} />
        <Route path="/update_profile" component={UpdateProfile} />
        <Route path="/candidates" component={Candidates} /> 
        <Route component={Notfound} /> 
        </Switch>      
      </Router>
     </div>
      
    
    );
  }
}
function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}
export default connect(
  mapStateToProps
)(App);

// export default App;
