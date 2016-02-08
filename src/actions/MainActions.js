import ActionTypes from '../ActionTypes';

function event(type, data) {
    return {type: type, payload: data};
}

export function deleteData() {
    return event(ActionTypes.DELETE_DATA, {});
}

export function updateData(name) {
    return event(ActionTypes.UPDATE_DATA, name);
}
