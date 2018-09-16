import { combineReducers } from 'redux';
import UserReducer from './UserReducer';


const allReducers= combineReducers({
    Users: UserReducer
});

export default allReducers