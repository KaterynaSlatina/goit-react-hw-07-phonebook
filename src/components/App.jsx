import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import './App.module.css';
import '../redux/store';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <FormContact />
      <h2>Contacts list</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <div>Your phonebook is empty. Add first contact!</div>
      )}
      {/* <Filter /> */}
    </>
  );
};
