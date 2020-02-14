const { createStore } = require('redux');
import moodReducer from './reducers/moodReducers.js';

export default createStore(
  moodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

