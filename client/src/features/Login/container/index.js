import {connect} from 'react-redux'
import Component from '../component'
import {SignInUser} from '../../../redux/actions/actions'

const mapStateToProps = state => {
    return {
        isAuth: state.authUser.isAuth,
        user: state.authUser.user,
    }
}
export default connect(mapStateToProps, {SignInUser})(Component);