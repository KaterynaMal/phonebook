import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetContacts, deleteContact } from 'services/api';

import { selectContactItem, selectFilterContact } from '../../redux/Contacts/contactsSlice.selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContactItem);
  const filter = useSelector(selectFilterContact);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const filteredContacts =
    allContacts && Array.isArray(allContacts)
      ? allContacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={css.phoneList}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <li className={css.contact_item} key={contact.id}>
              {contact.name}: {contact.phone}
              <button
                type="button"
                className={css.delete_btn}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No matching contacts found</li>
        )}
      </ul>
    </div>
  );
};

export { ContactList };
