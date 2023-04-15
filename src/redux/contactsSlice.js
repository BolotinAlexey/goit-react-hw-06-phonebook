import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },

    //   deleteTask(state, action) {
    //   const index = state.findIndex(task => task.id === action.payload);
    //   state.splice(index, 1);
    // },

    deleteContact(state, action) {
      const i = state.findIndex(contact => contact.id === action.payload);
      state.splice(i, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, addContact } = contactsSlice.actions;
