import React from 'react';
import Wrapper from './FormList.styled';
import { LabelSt, InputSt } from './FormList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
// import { getContacts, getFilter } from 'redux/store';



export function FilterForm ()  {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter)

     const searchContact = event => {
    dispatch(setContactsFilter(event.target.value.trim()));
  };

  return (
    <Wrapper>
      <h2>Contacts:</h2>
      <LabelSt htmlFor="filter">
        Find contacts by name
        <InputSt
          name="filter"
          type="text"
          placeholder="Enter name"
          value={filter}
          onChange={searchContact}
          disabled={useSelector(selectContacts).length === 0}
        />
      </LabelSt>
    </Wrapper>
  );
};