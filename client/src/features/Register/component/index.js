import React, {Component} from 'react';
import {history} from "../../../redux/store";
import {connect} from "react-redux";

class Register extends Component {

    state = {
        email: '',
        username: '',
        password: '',
    }

    componentWillMount() {
        if (this.props.isAuth) {
            history.push('/')
        }
    }

    signUp = () => {
        const self = this;
        self.props.SignUpUser({...self.state},history)
    }

    render() {
        return (
            <div className="p-5 col-md-12">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="form-group">
                                <h3 htmlFor="email">E-mail</h3>
                                <input name="email" type="text" className="form-control" value={this.state.email}
                                       onChange={(e) => {
                                           this.setState({
                                               email: e.target.value
                                           })
                                       }}/>
                            </div>
                            <div className="form-group">
                                <h3 htmlFor="username">Full Name</h3>
                                <input name="username" type="text" className="form-control" value={this.state.username}
                                       onChange={(e) => {
                                           this.setState({
                                               username: e.target.value
                                           })
                                       }}/>
                            </div>
                            <div className="form-group">
                                <h3 htmlFor="password">Password</h3>
                                <input name="password" type="password" className="form-control"
                                       onChange={(e) => {
                                           this.setState({
                                               password: e.target.value
                                           })
                                       }}/>
                            </div>
                            <button className="btn btn-success" onClick={this.signUp}>
                                <h3>
                                    Register
                                </h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.authUser.isAuth
    }
}
export default connect(mapStateToProps, {})(Register);



