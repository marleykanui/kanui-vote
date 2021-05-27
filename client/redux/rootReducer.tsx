// Redux Toolkit
import { combineReducers } from 'redux';

// Reducers
import CurrentAddress from './slices/CurrentAddressSlice';

const rootReducer = combineReducers({
  [CurrentAddress.name]: CurrentAddress.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
