import { selectContacts, selectFilter } from '../../redux/selectors';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const deleteContact = id => {
    dispatch(deleteContact(id));
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
