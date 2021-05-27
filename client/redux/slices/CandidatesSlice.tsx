// Redux Toolkit
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { HYDRATE } from 'next-redux-wrapper';

// Redux Types
import { AppState } from '../store';

// Types
interface CandidatesProps {
  candidates: { id: number; name: string; voteCount: number }[];
}

const hydrate = createAction<AppState>(HYDRATE);

const Candidates = createSlice({
  name: 'Candidates',
  initialState: { candidates: [] } as CandidatesProps,
  reducers: {
    setCandidates: (state, action: PayloadAction<CandidatesProps>) => {
      const { candidates } = action.payload;
      state.candidates = candidates;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload[Candidates.name],
      };
    });
  },
});

export const { setCandidates } = Candidates.actions;

export default Candidates;
