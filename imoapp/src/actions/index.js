// this function is an "action creator", it returns action (object) - nothing else happens
// the component, which uses this action, needs to be connected, so the action is sent to reducers
export const selectThread = (threadId) => {
    console.log(">>> selected id: " + threadId);
    return {
        type: 'select_thread',
        payload: threadId
    };
};

export const createThread = (threadDetails) => {
    return {
        type: 'select_thread',
        payload: threadId
    };
};