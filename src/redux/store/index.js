import { combineReducers, createStore } from 'redux';

import { expenseReducer } from '../reducers/reducers';

const reducer = combineReducers({
    expenses: expenseReducer
});

const initialState = {};
const store = createStore(reducer, initialState);

export default store;
