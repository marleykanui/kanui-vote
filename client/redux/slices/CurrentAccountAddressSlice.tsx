// Redux Toolkit
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { HYDRATE } from 'next-redux-wrapper';

// Redux Types
import { AppState } from '../store';

// Types
interface CurrentAccountAddressProps {
  currentAccountAddress: string;
}

const hydrate = createAction<AppState>(HYDRATE);

const CurrentAccountAddress = createSlice({
  name: 'CurrentAccountAddress',
  initialState: { currentAccountAddress: '' } as CurrentAccountAddressProps,
  reducers: {
    setAccountAddress: (
      state,
      action: PayloadAction<CurrentAccountAddressProps>
    ) => {
      const { currentAccountAddress } = action.payload;
      state.currentAccountAddress = currentAccountAddress;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload[CurrentAccountAddress.name],
      };
    });
  },
});

export const { setAccountAddress } = CurrentAccountAddress.actions;

export default CurrentAccountAddress;
