import React, {useEffect} from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
// import { getContacts, getFilter } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations'
import { selectFilteredContacts,selectIsLoading,  selectError } from 'redux/selectors';
import List from './ContatctList.styled'


export function ContactsList() {
  const filtredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);


  // const showList = filtredContact(contacts, filter)

  return (
    <List>
      {isLoading && !error ? (
        <p>please waite</p>
      ) : filtredContacts.length === 0 && !error ? (
        <p>The Phonebook is empty. Add your contacts.</p>
      ) : (
        filtredContacts.map(({ id, name, phone, number }) => (
          <ContactInfo key={id} contact={{ id, name, number , phone}} />
        ))
      )}
    </List>
  );
};
