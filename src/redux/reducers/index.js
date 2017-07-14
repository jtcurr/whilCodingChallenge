import { combineReducers } from 'redux';
import data from './dataReducer';

//Combines all reducers into one reducer
const reducer = combineReducers({
  data
})

export default reducer;