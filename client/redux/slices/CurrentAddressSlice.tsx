// Redux Toolkit
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { HYDRATE } from 'next-redux-wrapper';

// Redux Types
import { AppState } from '../store';

// Types
interface CurrentAddressProps {
  currentAddress: string;
}

const hydrate = createAction<AppState>(HYDRATE);

const CurrentAddress = createSlice({
  name: 'currentAddress',
  initialState: { currentAddress: '' } as CurrentAddressProps,
  reducers: {
    setAddress: (state, action: PayloadAction<CurrentAddressProps>) => {
      const { currentAddress } = action.payload;
      state.currentAddress = currentAddress;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload[CurrentAddress.name],
      };
    });
  },
});

export const { setAddress } = CurrentAddress.actions;

export default CurrentAddress;
