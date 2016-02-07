export const DELETE_DATA = 'DELETE_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

export function deleteData() {
    return {
        type: DELETE_DATA
    };
}

export function updateData(name) {
    window.console.log('refs', name);
    return {
        type: UPDATE_DATA,
        payload: name
    };
}
