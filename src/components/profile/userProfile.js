import React from 'react'
import UserMiddleware from "../../store/middlewares/userMiddleware";
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
   
    render() {
        return (
            <div class="container content">
                <form className="whiteForm" >
                    <h3 className="top" >MY PROFILE</h3>
                    <div class="input-field col s6 m6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="first" type="text" data-length="10" class="validate" value={this.props.authReducer.user.firstName} />
                        <label for="firstName">First Name</label>
                        <span class="helper-text" data-error="max characters can be 10" data-success="right"></span>
                    </div>
                    <div class="input-field col s6 m6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="last" type="text" data-length="10" class="validate" value={this.props.authReducer.user.lastName} />
                        <label for="lastName">Last Name</label>
                        <span class="helper-text" data-error="max characters can be 10" data-success="right"></span>
                    </div>
                    {/* <div class="input-field col s12 m12">
                        <i class="material-icons prefix">email</i>
                        <input id="email" type="email" class="validate" value={this.props.authReducer.user.email} />
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="Enter a valid Email" data-success="right"></span>
                    </div>
                    <div class="input-field col s6 m12">
                        <i class="material-icons prefix">lock_open</i>
                        <input id="password" type="password" minLength="8" class="validate" value={this.props.authReducer.user.password} />
                        <label for="password">Password</label>
                        <span class="helper-text" data-error="Passwword must be 8 characters" data-success="right"></span>
                    </div> */}
                   <Link to="/update_profile"> <button class="btn blue lighten-1 z-depth-0" type="submit" >Update Profile</button></Link>

                </form>
            </div>
        )
    }
}


export default UserProfile;