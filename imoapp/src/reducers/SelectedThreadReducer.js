export default (state = null, action) => {      // if state is "undefined" (runs for the first time), it is set to null, which is ok, because it is not undefined
    switch (action.type) {
        case 'select_thread': {
            return action.payload;
        }
        default:
        return state;       // if any other action type calls, it returns the same id as it returned last time
    }
}