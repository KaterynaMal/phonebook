import React from 'react';
import { useLocation } from 'react-router-dom';
import css from './Contacts.module.css';
import { ContactForm, Filter, ContactList } from 'components';

const ContactsPage = () => {
  const location = useLocation();

  return (
    <div className={css.form_container}>
      <h1 className={css.phoneBookTitle}>Phonebook</h1>

      <ContactForm location={location}></ContactForm>
      <h2>Contacts</h2>
      <Filter location={location}></Filter>
      <ContactList location={location}></ContactList>
    </div>
  );
};

export default ContactsPage;
