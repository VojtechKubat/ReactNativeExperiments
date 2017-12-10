// function is action creator, it returns action, and it is send to all reducers
export const selectThread = (threadId) => {
    // console.log(">>> selected id: " + threadId);
    return {
        type: 'select_thread',
        payload: threadId
    };
};