import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/Contacts/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const handleFilter = e => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.filter_input}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export { Filter };
