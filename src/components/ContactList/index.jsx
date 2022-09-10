import React from 'react';
import Contact from '../Contacts/index';
import { useStyles } from './styles';
import { useFetchContactsQuery } from 'Redux/contactSlice';
import { useSelector } from 'react-redux';

const getVisibleEl = (contacts = [], filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const styles = useStyles();
  const filteredContact = useSelector(state =>
    getVisibleEl(data, state.filter.value)
  );

  return (
    <ul className={styles.list}>
      {filteredContact.map(({ id, name, phone }) => {
        return <Contact key={id} name={name} number={phone} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
