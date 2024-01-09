import { FormContact } from './FormContact/FormContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import './App.module.css';
import '../redux/store';

export const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <FormContact />
      <h2>Contacts list</h2>
      <ContactList />
      <Filter />
    </>
  );
};
//
