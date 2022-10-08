import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

export const getGreetingAsync = createAsyncThunk('fetchGreeting', async () => {
  const random = Math.floor(Math.random() * 5);

  const response = await fetch(`api/messages/${random}`);
  const { greeting } = await response.json();
  return greeting;
});

export const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greet: '',
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getGreetingAsync.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        greet: action.payload,
      };
      return newState;
    },
  },
});

export default greetingSlice.reducer;
