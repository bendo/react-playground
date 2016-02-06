import { connect } from 'react-redux';
import ActionCreator from '../ActionCreator';
import Hello from '../components/Hello';

function mapStateToProps(state) {
    return {
        mainData: state.get('mainData')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteClick: () => {
            dispatch(ActionCreator.deleteData());
        }, onUpdateClick: () => {
            dispatch(ActionCreator.updateData());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
