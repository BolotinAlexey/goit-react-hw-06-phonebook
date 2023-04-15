import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import { filtersReducer } from './filtersSlice';

console.log(contactsReducer);
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
