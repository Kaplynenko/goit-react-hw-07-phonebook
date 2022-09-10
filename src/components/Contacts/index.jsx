import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../Redux/contactSlice';

const Contact = ({ name, number, id }) => {
  const [deleteContact, { isLoading: deleting }] = useDeleteContactMutation();

  return (
    <li>
      {name}:{number}
      <button type="button" onClick={() => deleteContact(id)}>
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};
Contact.protoType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
