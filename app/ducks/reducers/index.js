import {combineReducers} from 'redux';
import Notes from './NotesReducer'

export default combineReducers({
    Note: Notes
})