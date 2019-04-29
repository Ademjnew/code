import { connect } from 'react-redux'
import Component from '../component'
import {getUploadsHistory} from '../../../redux/actions/actions'
const mapStateToProps = state => {
    return {
        user: state.authUser.user,
        isAuth: state.authUser.isAuth,
        files: state.location.files,
        locations: state.location.locations,
    }
}
export default connect(mapStateToProps, {getUploadsHistory})(Component);