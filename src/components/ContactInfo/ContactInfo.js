// import Wrapper from './ContactInfo.styled'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
// import { BsXCircleFill } from "react-icons/bs";
import {
  ButtonStyle,
  ItemsStyled,
  Paragrapher,
  Span,
} from './ContactInfo.styled';
import { ReactComponent as Delete } from '../icons/Delete.svg';




function ContactInfo({ contact }) {
  const dispatch = useDispatch();

  const deliteContacts = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <ItemsStyled>
      <Paragrapher>
        <Span>Name: </Span>
        {contact.name}
      </Paragrapher>
      <Paragrapher>
        <Span>Number: </Span>
         {contact.number}
      </Paragrapher>
      <ButtonStyle onClick={deliteContacts}>
        {/* <BsXCircleFill />         */}
        <Delete />
      </ButtonStyle>
    </ItemsStyled>
  );
};

export default ContactInfo;
