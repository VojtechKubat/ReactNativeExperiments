// function is action creator, it returns action, and it is send to all reducers
export const selectThread = (threadId) => {
    return {
        type: 'select_library',
        payload: threadId
    };
};