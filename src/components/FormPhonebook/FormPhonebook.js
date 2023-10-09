import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import {
  BtnStyle,
  FormPhB,
  LabelStyle,
  InputSt,
  Wrapper,
} from './FormPhonebook.styled';

export function FormPhonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const isNameExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      window.alert(`Contact with name ${name} already exists!`);
      return;
    }

    const isNumberExist = contacts.find(
      contact => contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      window.alert(`Number ${number} is already in contacts!`);
      return;
    }

    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <FormPhB onSubmit={handleSubmit}>
        <LabelStyle>Name</LabelStyle>
        <InputSt
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
        <LabelStyle>Number</LabelStyle>
        <InputSt
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />

        <BtnStyle type="submit">Add contact</BtnStyle>
      </FormPhB>
    </Wrapper>
  );
}
