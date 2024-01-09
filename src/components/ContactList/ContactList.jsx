import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsAction } from '../../redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const deleteContact = id => {
    dispatch(deleteContactsAction(id));
  };

  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contact}>
      <ul className={css.contactList}>
        {findContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className={css.contactNames}>
              {name} : {number}
            </p>
            {/* contacts={findContacts} */}
            <button
              className={css.contactBtn}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
