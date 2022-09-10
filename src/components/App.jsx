import Form from './Form/index';
import ContactList from './ContactList';
import Container from './Container';
import SearchForm from './SearchForm';

export const App = () => {
  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
        <Form />

        <h2>Contacts</h2>
        <SearchForm  />
        <ContactList />
      </Container>
    </div>
  );
};
