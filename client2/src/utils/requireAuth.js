import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import history from './history'

export default function (Conmponent) {
    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.isAuth) {
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
            isAuth: state.get('authUser').isAuth
        }
    }
    return connect(mapStateToProps)(Authenticate)
}
