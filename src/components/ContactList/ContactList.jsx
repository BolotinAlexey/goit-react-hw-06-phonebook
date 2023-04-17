import { Ul } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterWord)
  );

  return (
    <Ul>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem id={id} key={id} number={number} name={name} />
      ))}
    </Ul>
  );
}

export default ContactList;
