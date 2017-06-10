import { combineReducers } from 'redux';
import users from './userReducer';
import isAuth from './authUserReducer';
import documents from './documentReducer';
import message from './messageReducer';
import searchResults from './searchReducer';
// import manageRoles from './roleReducer';
// import manageSearch from './searchReducer';
// import currentlySelected from './currentlySelectedReducers';

const rootReducer = combineReducers({
  users,
  isAuth,
  documents,
  message,
  searchResults
  // manageRoles,
  // manageSearch,
  // currentlySelected
});

export default rootReducer;