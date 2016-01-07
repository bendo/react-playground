import ActionTypes from './ActionTypes';

function event(type, data) {
    return {type: type, data: data};
}

export default Object.freeze({
    deleteData: () => event(ActionTypes.DELETE_DATA, {}),
    updateData: (ref, data) => event(ActionTypes.UPDATE_DATA, {ref: ref, data: data})
});