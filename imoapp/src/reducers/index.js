import { combineReducers } from 'redux';
import ThreadListReducer from './ThreadListReducer'

export default combineReducers({
    allThreads: ThreadListReducer
});