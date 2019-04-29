import React, {Component} from 'react';
import {history} from "../../../redux/store";
import {connect} from "react-redux";

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    componentWillMount() {
        if (this.props.isAuth) {
            history.push('/')
        }
    }

    authenticate = () => {
        const self = this;
        self.props.SignInUser({...self.state},history)
    }

    render() {
        return (
            <div className="p-5 col-md-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="form-group">
                                <h3 htmlFor="username">E-mail</h3>
                                <input name="username" type="text" className="form-control" value={this.state.email}
                                       onChange={(e) => {
                                           this.setState({
                                               email: e.target.value
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
                            <button className="btn btn-success" onClick={this.authenticate}>
                                <h3>
                                    Login
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
export default connect(mapStateToProps, {})(Login);



