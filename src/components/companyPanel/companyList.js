import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/navbar";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import ViewDataMiddleware from "../../store/middlewares/viewDataMiddleware";
import UserMiddleware from "../../store/middlewares/userMiddleware";

class CompanyList extends React.Component {
    constructor() {
        super();
        this.state = { loading: true }

    }
    handleDelete(id) {
        this.props.deleteUser(id)
    }

    // componentWillReceiveProps(nextProps){
    //     nextProps.viewAllCompaniesData()
    //     setTimeout(() => {
    //         this.setState({
    //             loading: false
    //         })
    //     }, 3000);
    // }

    componentDidMount() {
        this.props.viewAllCompaniesData()
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 3000);
    }

    render() {
        console.log("workinggggggggggg")
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
                        <div className="table-container">
                            <h2 className="heading">Company List</h2>
                            <table>
                                <thead className="cards">
                                    <td></td>
                                    <td>Company Name</td>
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
        companiesData: state.viewDataReducer,
        authReducer: state.authReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        LogoutDispatch: data => dispatch(AuthMiddleWare.logout(data)),
        viewAllCompaniesData: () => dispatch(ViewDataMiddleware.viewAllCompanies()),
        deleteUser: (id) => dispatch(UserMiddleware.deleteUser(id))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyList);