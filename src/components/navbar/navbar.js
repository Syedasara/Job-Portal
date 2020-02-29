import React from 'react';
import { Route, BrowserRouter as Router, Link, Redirect, NavLink } from 'react-router-dom';
import "./navbar.css"
import StudentLinks from "./studentLinks";
import CompanyLinks from "./companyLinks";
import AdminLinks from "./adminLinks";



class Navbar extends React.Component {
    render() {
        const links = () => {
           console.log(this.props.type)   
            if (this.props.type == "company") {
                return <CompanyLinks />
            }
            else if (this.props.type == "student"){
                return <StudentLinks/>
            }
            else{
                return <AdminLinks />
            }
        }
            return (
                <div id="navbar">
                    
                        <nav className="nav-wrapper grey darken-3">
                            <div>
                                <ul className="right">
                                {links()}
                                </ul>
                            </div>
                        </nav>
                    
                    
                </div>
            )
        }

    }
    
    export default Navbar;