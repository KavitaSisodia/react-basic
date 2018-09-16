import { createStore, applyMiddleware , compose } from 'redux';
//const store= createStore(() => [],{},applyMiddleware());
import thunk from 'redux-thunk';
import allReducers from './reducers/AllReducers';

const initialState={};

const middleware= [thunk];

const store = createStore(allReducers,initialState,
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&&  window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;