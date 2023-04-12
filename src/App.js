import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { initialData } from './data.js';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() =>
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : initialData
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = delId => {
    setContacts(contacts.filter(({ id }) => id !== delId));
  };

  const handleForm = row => {
    if (contacts.find(({ name }) => name === row.name)) {
      alert(`Record ${row.name} already exists`);
      return;
    }
    setContacts(prev => [{ id: nanoid(), ...row }, ...prev]);
  };

  const handlerChangeFilter = e => setFilter(e.target.value);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onForm={handleForm} />

      <h2>Contacts</h2>
      <Filter value={filter} handlerChangeFilter={handlerChangeFilter} />
      <ContactList
        filter={filter}
        contacts={contacts}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
