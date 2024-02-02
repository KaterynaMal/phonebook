import { ContactForm, Filter, ContactList } from 'components';
import css from './ContactsForm.module.css';

export const App = () => {
  return (
    <div className={css.form_container}>
      <h1>Phonebook</h1>

      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};
