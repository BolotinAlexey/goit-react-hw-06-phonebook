// import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

// function ContactList({ filter, contacts }) {
function ContactList() {
  // const defineList = () => {
  //   const subStr = filter.toLowerCase();
  //   return contacts.filter(({ name }) => name.toLowerCase().includes(subStr));
  // };
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  console.log(contacts);

  return (
    <Ul>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem
          id={id}
          key={id}
          number={number}
          name={name}
          // deleteRec={id => onDelete(id)}
        />
      ))}
    </Ul>
  );
}

ContactList.propTypes = {
  // onDelete: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
  // contacts: PropTypes.arrayOf(Object).isRequired,
};

export default ContactList;
