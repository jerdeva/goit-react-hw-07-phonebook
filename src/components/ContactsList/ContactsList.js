import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import { getContacts, getFilter } from 'redux/store';
import {  useSelector } from 'react-redux';
import List from './ContatctList.styled'

const filtredContact = (contacts, filter) => {
  const correctFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(correctFilter)
  );
}


export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const showList = filtredContact(contacts, filter)

  return (
    <List>
      {showList.map(({ id, name, number }) => {
        return (
          <ContactInfo key={id} contact={{ id, name, number }}/>
        );
      })}
    </List>
  );
};
