import React from 'react'
import "./companyPanel.css"
import { connect } from 'react-redux'
import Navbar from "../navbar/navbar";
//import {addPost} from '../../store/actions/action'
import AuthMiddleWare from "../../store/middlewares/authMiddleware";
import ProjectMiddleware from "../../store/middlewares/projectMiddleware";
class PostJob extends React.Component {
    state = {
        company_name: '',
        title:'',
        detail: '',
        message:""
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let post = this.state;
        this.setState({
          company_name: "",
          title: "",
          detail: ""
        });
        this.props.addPost(post);
        
      }

    //   componentWillReceiveProps(nextProps){
    //     if(nextProps.projectReducer && nextProps.projectReducer.message){
    //       this.setState({
    //         message : nextProps.projectReducer.message
    //       })
    //     }
    // }
    render() {
        return (
          <div>
            <Navbar type={this.props.authReducer.user.type} />
            <div class="container content">
                <form className="whiteForm"  onSubmit={this.handleSubmit} >
                    <h3 className="top">POST YOUR JOB</h3>

                    <div class="input-field col s6 m6">
                        <input id="company_name" type="text" value={this.state.company_name} class="validate" onChange={this.handleChange}/>
                        <label for="company_name">Company Name</label>
                    </div>
                    <div class="input-field col s6 m6">
                        <input id="title" type="text" class="validate" value={this.state.title} onChange={this.handleChange}/>
                        <label for="title">Title</label>
                    </div>
                    <div class="input-field col s12">
                        <textarea id="detail" class="materialize-textarea" value={this.state.detail} onChange={this.handleChange}></textarea>
                        <label for="detail">Job Details</label>
                    </div>
                    <div class="input-field">
                        <button class="btn blue lighten-1 z-depth-0" type="submit">Post
                           <i class="material-icons right">send</i>
                        </button>
                    </div>
                    {/* <p className="error"> *{this.state.message}</p> */}

                </form>

            </div>

          </div>
          
        )
    }
}

function mapStateToProps(state) {
    return {
      authReducer: state.authReducer,
      projectReducer: state.projectReducer
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
      addPost:(project) => dispatch(ProjectMiddleware.addPost(project))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostJob)