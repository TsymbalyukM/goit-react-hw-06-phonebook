import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { deleteContacts } from 'redux/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const visibleContacts = getVisibleContacts();
  if (visibleContacts.length === 0) return null;
  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => removeContact(contact.id)}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
