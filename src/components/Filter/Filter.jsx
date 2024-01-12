import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={changeFilter}
        filter={filter}
      />
    </label>
  );
};
