export const addNote = (note) => {
    return {
        type: 'ADD',
        payload: note
    }
}

export const DeleteNote = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}


export const editStatus = (info) => {
    return {
        type: 'STATUS',
        payload: info
    }
}

export const changeNote = (note) => {
    return {
        type: 'EDIT',
        payload: note
    }
}