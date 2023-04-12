import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';

function ContactList({ filter, contacts, onDelete }) {
  const defineList = () => {
    const subStr = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(subStr));
  };

  return (
    <Ul>
      {defineList().map(({ name, id, number }) => (
        <ContactItem
          id={id}
          key={id}
          number={number}
          name={name}
          deleteRec={id => onDelete(id)}
        />
      ))}
    </Ul>
  );
}

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(Object).isRequired,
};

export default ContactList;
