// Redux Toolkit
import { combineReducers } from 'redux';

// Reducers
import CurrentAccountAddress from './slices/CurrentAccountAddressSlice';

const rootReducer = combineReducers({
  [CurrentAccountAddress.name]: CurrentAccountAddress.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
