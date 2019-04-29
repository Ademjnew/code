import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {history} from '../redux/store'

export default function (Conmponent, condition) {
    class Authenticate extends Component {

        componentWillMount() {
            if (this.props.isAuth === condition) {
                history.push('/login')
            }
        }

        render() {
            return (
                <Conmponent {...this.props} />
            )
        }
    }

    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.authUser.isAuth
        }
    }
    return connect(mapStateToProps)(Authenticate)
}