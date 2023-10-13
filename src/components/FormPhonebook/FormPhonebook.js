import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import {
  BtnStyle,
  FormPhB,
  LabelStyle,
  InputSt,
  Wrapper,
} from './FormPhonebook.styled';

export function FormPhonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

const handleSubmit = event => {
  event.preventDefault();

  const contact = {
    name: name,
    phone: phone,
  };

  const isContactExist = contacts.find(
    ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  );

  if (isContactExist) {
   window.alert(`phone ${contact.name} is already in contacts!`);
    return;
  }

const isphoneExist = contacts.find(
  ({ phone }) => {
    if (contact.phone && typeof contact.phone === 'string' && phone) {
      return contact.phone.replace(/\D/g, '') === phone.replace(/\D/g, '');
    }
    return false; 
  }
  );

  if (isphoneExist) {
   window.alert(
      `phone ${contact.phone} is already in contacts!`
    );
    return;
  }

  dispatch(addContact(contact));
  setName('');
  setPhone('');
};

const handleNameChange = event => {
  setName(event.target.value);
};

const handlephoneChange = event => {
  setPhone(event.target.value);
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
        <LabelStyle>phone</LabelStyle>
        <InputSt
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handlephoneChange}
        />

        <BtnStyle type="submit">Add contact</BtnStyle>
      </FormPhB>
    </Wrapper>
  );
}
