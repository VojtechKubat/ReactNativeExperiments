
// reducer is a function
const reducer = (state = [], action) => { 
    if (action.type === 'splitString') {
      return action.payload.split(' ');
    } 
    if (action.type === 'addItem') {
      return [...state, action.payload];
    }
    return state;
  };
  
  const store = Redux.createStore(reducer);
  
  
  // action is an object with type and payload
  const actionSplitString = { 
    type: "splitString",
    payload: "Hello world and something else"
  };
  
  const actionAddItem = {
    type: 'addItem',
    payload: 'NEW'
  };
  
  store.getState();
  
  store.dispatch(actionSplitString);
  
  store.getState();
  
  store.dispatch(actionAddItem);
  store.getState();
  store.dispatch(actionAddItem);
  store.getState();
  store.dispatch(actionAddItem);
  
  store.getState();