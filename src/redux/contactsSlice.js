import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactsAction: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContactsAction: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { addContactsAction, deleteContactsAction } =
  contactsSlice.actions;
