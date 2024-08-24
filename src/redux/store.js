import { createStore, combineReducers } from 'redux';
import dashboardReducer from './reducers/dashboardReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
