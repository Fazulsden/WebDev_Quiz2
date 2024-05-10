import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user.reducer';
import profileReducer from './profile.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
