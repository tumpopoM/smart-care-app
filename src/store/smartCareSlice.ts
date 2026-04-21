import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type SmartCare = {
  id: string;
  title: string;
  description: string;
  createdAt: number;
};

type SmartCareState = {
  list: SmartCare[];
};

const initialState: SmartCareState = {
  list: [],
};

const smartCareSlice = createSlice({
  name: 'smartCare',
  initialState,
  reducers: {
    addRequest: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
      }>,
    ) => {
      const newItem: SmartCare = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: Date.now(),
      };

      state.list.push(newItem);
    },
  },
});

export const { addRequest } = smartCareSlice.actions;
export default smartCareSlice.reducer;
