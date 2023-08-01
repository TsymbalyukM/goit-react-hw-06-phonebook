import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
export const sliceContacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts = [action.payload]; //...state.contacts, 
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(e => e.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = sliceContacts.actions;
export const reducerContacts = sliceContacts.reducer;
