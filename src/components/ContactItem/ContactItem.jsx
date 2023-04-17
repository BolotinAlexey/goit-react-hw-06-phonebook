import { Item } from './ContactItem.styled';
import { deleteContact } from '../../redux/contactsSlice';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact({ id }));
  };

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </Item>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
