import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/actions'

class Header extends Component {

    logoutUser = () => {
        this.props.logout()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <h3>Home</h3>
                            </Link>
                        </li>
                        {
                            !this.props.isAuth &&
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    <h3>Login</h3>
                                </Link>
                            </li>
                        }
                        {
                            !this.props.isAuth &&
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    <h3>Register</h3>
                                </Link>
                            </li>
                        }
                        {
                            this.props.isAuth &&
                            <li className="nav-item">
                                <a className="nav-link">
                                    <h3>
                                        {this.props.user.user.username}
                                    </h3>
                                </a>
                            </li>

                        }
                        {
                            this.props.isAuth &&
                            <li className="nav-item">
                                <a onClick={this.logoutUser} className="nav-link">
                                    <h3>Logout</h3>
                                </a>
                            </li>
                        }


                    </ul>
                </div>
            </nav>

        )
            ;
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser.user,
        isAuth: state.authUser.isAuth
    }
}

export default connect(mapStateToProps, {logout})(Header);
