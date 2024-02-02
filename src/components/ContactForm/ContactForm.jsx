import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'services/api';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const newName = e.currentTarget.elements.name.value;

    if (
      !contacts
        .map(contact => contact.name)
        .some(name => name.toLowerCase() === newName.toLowerCase())
    ) {
      const newNumb = e.currentTarget.elements.number.value;
      const newContact = {
        name: newName,
        phone: newNumb,
      };
      dispatch(addContact(newContact));
      e.currentTarget.reset();
    } else {
      alert(`${newName} is already in contacts.`);
    }
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input className={css.input} type="text" name="name" required />

        <label className={css.label}>Number</label>
        <input className={css.input} type="tel" name="number" required />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export { ContactForm };
