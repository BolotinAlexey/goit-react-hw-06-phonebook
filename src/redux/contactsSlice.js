import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../data.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialData,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },

    deleteContact(state, action) {
      const i = state.findIndex(contact => contact.id === action.payload);
      state.splice(i, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, addContact } = contactsSlice.actions;
