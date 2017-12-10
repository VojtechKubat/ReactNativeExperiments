import { combineReducers } from 'redux';
import ThreadListReducer from './ThreadListReducer';
import SelectedThreadReducer from './SelectedThreadReducer';

export default combineReducers({
    allThreads: ThreadListReducer,
    selectedThreadId: SelectedThreadReducer
});