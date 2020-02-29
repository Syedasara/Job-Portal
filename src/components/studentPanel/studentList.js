import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/navbar";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import ViewDataMiddleware from "../../store/middlewares/viewDataMiddleware";
import UserMiddleware from "../../store/middlewares/userMiddleware";

class StudentList extends React.Component {
    constructor() {
        super();
        this.state = { loading: true }

    }
    handleDelete(id) {
        this.props.deleteUser(id)
    }

    componentDidMount() {
        this.props.viewAllStudentsData()
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className="loader"></div>
                    // <div class="progress">
                    //     <div class="indeterminate"></div>
                    // </div>
                    :
                    <div>

                        <div className="table-container">
                            <Navbar type={this.props.authReducer.user.type} />
                            <h2 className="heading">Student List</h2>
                            <table>
                                <thead className="cards">
                                    <td></td>
                                    <td>Student Name</td>
                                    <td>E-mail</td>
                                    <td></td>

                                </thead>
                                {this.props.studentsData && this.props.studentsData.allStudents && this.props.studentsData.allStudents.length && this.props.studentsData.allStudents.map(data => {
                                    return <tbody className="cards">
                                        <tr className="row">
                                            <td></td>
                                            <td>{data.firstName} {data.lastName}</td>
                                            <td>{data.email}</td>
                                            <td>
                                            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.handleDelete(data.id)}>Delete
                                                   <i class="material-icons right">delete_forever</i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                })}
                            </table>
                        </div>
                    </div>


                }

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        studentsData: state.viewDataReducer,
        authReducer: state.authReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        viewAllStudentsData: () => dispatch(ViewDataMiddleware.viewAllStudents()),
        deleteUser: (id) => dispatch(UserMiddleware.deleteUser(id))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentList);