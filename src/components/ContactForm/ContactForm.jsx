import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Form } from './ContactForm.styled';
import { addContact } from '../../redux/contactsSlice';

function ContactForm() {
  const dispatch = useDispatch();
  const handlerSubmit = e => {
    e.preventDefault();
    const number = e.target.elements.number.value;
    const name = e.target.elements.name.value;

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
    e.target.reset();
  };

  return (
    <Form onSubmit={e => handlerSubmit(e)}>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="tel">Number </label>
      <input
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <button type="submit">Add contact</button>
    </Form>
  );
}

// ContactForm.propTypes = {
//   onForm: PropTypes.func.isRequired,
// };

export default ContactForm;
