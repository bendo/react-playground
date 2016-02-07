import { connect } from 'react-redux';
import * as actionCreators from '../actions/MainActions';
import { bindActionCreators } from 'redux';
import MainApp from '../components/MainApp';

function mapStateToProps(state) {
    return {
        name: state.name,
        age: state.age,
        sex: state.sex
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
