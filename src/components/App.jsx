
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts-slice';
import Container from './Continer/Container';
import Header from './Header/Header';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Message from './Message/Message';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container title="Contacts">
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <Message />}
      </Container>
    </>
  );
}

export default App;
