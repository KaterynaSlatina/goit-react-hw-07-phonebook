import { deleteContact } from '../../redux/operations';
import {
  // selectContacts,
  // selectFilter,
  selectVisibleContacts,
} from '../../redux/selectors';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  // const findContacts = Array.isArray(contacts)
  //   ? contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : [];
  const contacts = useSelector(selectVisibleContacts);

  // const deleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <div className={css.contact}>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className={css.contactNames}>
              {name} : {number}
            </p>
            <button
              className={css.contactBtn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
