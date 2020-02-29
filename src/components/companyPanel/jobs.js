import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/navbar";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import ViewDataMiddleware from "../../store/middlewares/viewDataMiddleware";
import ProjectMiddleware from "../../store/middlewares/projectMiddleware";
import './companyPanel.css';
import { thisExpression } from "@babel/types";

class Jobs extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            flag: false
        }

    }
    handleDelete(id) {
        console.log("hello");
        this.props.deletePost(id);
    }

    handleApply(email) {
        console.log("hello");
        console.log(this.props.authReducer.user.apply);
        // if (this.props.authReducer.user.apply) {
        //     document.getElementById("apply").setAttribute("disabled", true);
        // }
        // let state = this.setState({
        //     flag: true
        // })
        // this.props.appliedPost(id, state);
    }


    componentDidMount() {
        this.props.viewAllProjectsData()
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 3000);
    }

    render() {
        // console.log("woringggggggggg")
        return (
            <div>
                {this.state.loading ?
                    <div className="loader"></div>
                    // <div class="progress">
                    //     <div class="indeterminate"></div>
                    // </div>
                    :
                    <div>
                        <Navbar type={this.props.authReducer.user.type} />
                        <div className="table-container view">
                            <h2 className="heading">JOB POSTS</h2>
                            {/* <table> */}
                            <div id="cards">
                                {this.props.projectsData && this.props.projectsData.allProjects && this.props.projectsData.allProjects.length && this.props.projectsData.allProjects.map(data => {
                                    return <div className=" box">
                                        <h3 className="name">{data.username}</h3>
                                        <p class="para"><h5 className="div-heading"><u>TITLE </u></h5>{data.title}</p>
                                        <p class="para"><h5 className="div-heading"><u>DETAILS</u></h5>
                                            {data.detail}</p>

                                        {this.props.authReducer.user.type === "student" ?
                                            <a class="btn waves-effect waves-light" type="submit" name="action" href="mail to: {this.props.authreducer.user.email}">Apply
                                            <i class="material-icons right">send</i>
                                            </a>
                                            : <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.handleDelete(data.id)}>Delete
                                            <i class="material-icons right">delete_forever</i>
                                            </button>
                                        }

                                    </div>


                                    {/* <tr className="row">
                                    <td>{data.firstName} {data.lastName}</td>
                                    <td>{data.email}</td>                            
                                    <td><div className="button" onClick={() => this.handleDelete()}>
                                        <i class="small material-icons prefix">delete_forever</i>
                                    </div></td>
                                </tr> */}

                                })}
                            </div>

                            {/* </table> */}


                        </div>
                    </div>


                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        authReducer: state.authReducer,
        projectsData: state.viewDataReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        viewAllProjectsData: () => dispatch(ViewDataMiddleware.viewAllProjects()),
        deletePost: (id) => dispatch(ProjectMiddleware.deletePost(id)),
        appliedPost: (id, state) => dispatch(ProjectMiddleware.appliedPost(id, state)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Jobs);