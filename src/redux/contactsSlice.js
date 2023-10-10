import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
             state.isLoading = true;
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
