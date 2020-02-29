import React from 'react'
import Navbar from "../navbar/navbar";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import UserMiddleware from "../../store/middlewares/userMiddleware";
import { connect } from "react-redux";

class UpdateProfile extends React.Component {
    constructor() {
        super();
        // this.state = { loading: true }
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            type: "",
            Error: false
        }
    }
    handleUpdate(id) {

        let data = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type
        }
        this.props.updateUser(id, data)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authReducer && nextProps.authReducer.error && nextProps.authReducer.error.message) {
            this.setState({
                signupError: nextProps.userReducer.error.message
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar type={this.props.authReducer.user.type} />
                <div class="container content">
                    <form className="whiteForm" onSubmit={(e) => e.preventDefault()}>
                        <h3 className="top" >MY PROFILE</h3>
                        <div class="input-field col s6 m6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="first" type="text" data-length="10" class="validate" value={this.state.firstName}
                                onChange={e => this.setState({ firstName: e.target.value, Error: false })} />
                            <label for="firstName">First Name</label>
                            <span class="helper-text" data-error="max characters can be 10" data-success="right"></span>
                        </div>
                        <div class="input-field col s6 m6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="last" type="text" data-length="10" class="validate" value={this.state.lastName}
                                onChange={e => this.setState({ lastName: e.target.value, Error: false })} />
                            <label for="lastName">Last Name</label>
                            <span class="helper-text" data-error="max characters can be 10" data-success="right"></span>
                        </div>
                        {/* <div class="input-field col s12 m12">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="email" class="validate" value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value, Error: false })} />
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="Enter a valid Email" data-success="right"></span>
                        </div>
                        <div class="input-field col s6 m12">
                            <i class="material-icons prefix">lock_open</i>
                            <input id="password" type="password" minLength="8" class="validate" value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value, Error: false })} />
                            <label for="password">Password</label>
                            <span class="helper-text" data-error="Passwword must be 8 characters" data-success="right"></span>
                        </div> */}
                        {/* <div class="input-field col s6 m6">
                            <p>
                                <label>
                                    <input name="type" class="with-gap" type="radio" value="company" onChange={(e) => this.setState({ type: e.target.value })} />
                                    <span>Company</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="type" class="with-gap" type="radio" value="student" onChange={(e) => this.setState({ type: e.target.value })} />
                                    <span>Job Seeker</span>
                                </label>
                            </p>
                        </div> */}
                        <button class="btn blue lighten-1 z-depth-0" type="submit" onClick={() => this.handleUpdate(this.props.authReducer.user.id)}>Edit
                    </button>
                        {console.log(this.props.authReducer.user)}
                    </form>
                </div>

            </div>

        )
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
        updateUser: (id, data) => dispatch(UserMiddleware.UpdateUser(id, data)),
        // LogoutDispatch: data => dispatch(AuthMiddleWare.logout(data))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProfile);