// Redux Toolkit
import { combineReducers } from 'redux';

// Reducers
import CurrentAccountAddress from './slices/CurrentAccountAddressSlice';
import Candidates from './slices/CandidatesSlice';

const rootReducer = combineReducers({
  [CurrentAccountAddress.name]: CurrentAccountAddress.reducer,
  [Candidates.name]: Candidates.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
