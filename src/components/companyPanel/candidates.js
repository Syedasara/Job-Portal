import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/navbar";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import ViewDataMiddleware from "../../store/middlewares/viewDataMiddleware";
import UserMiddleware from "../../store/middlewares/userMiddleware";

class Candidates extends React.Component {
    constructor() {
        super();
        this.state = { loading: true }
    }
    handleDelete(id) {
        this.props.deleteUser(id)
    }

    componentDidMount() {
        this.props.viewCandidates()
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
                    :
                    <div>
                        <Navbar type={this.props.authReducer.user.type} />
                        <div className="table-container">
                            <h2 className="heading">Company List</h2>
                            <table>
                                <thead className="cards">
                                    <td></td>
                                    <td>Student Name</td>
                                    <td>E-mail</td>
                                    <td></td>
                                </thead>
                                {console.log(this.props.companiesData.allCompanies)}
                                {this.props.companiesData && this.props.companiesData.allCompanies && this.props.companiesData.allCompanies.length && this.props.companiesData.allCompanies.map((data, index) => {
                                    return <tbody className="cards" key={data.id}>
                                        <tr className="row">
                                            <td></td>
                                            <td className="name">{data.firstName} {data.lastName}</td>
                                            <td>{data.email}</td>
                                            <td><div className="button" onClick={() => this.handleDelete(data.id)}>
                                                <i class="small material-icons prefix">delete_forever</i>
                                            </div></td>
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
        companiesData: state.viewDataReducer,
        authReducer: state.authReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        LogoutDispatch: data => dispatch(AuthMiddleWare.logout(data)),
        viewCandidates: () => dispatch(ViewDataMiddleware.viewMyCandidates()),
        deleteUser: (id) => dispatch(UserMiddleware.deleteUser(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Candidates);