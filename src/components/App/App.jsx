import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';

import { Container, TitleMain, TitleSecond } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: '111', name: 'Stepan Bandera', number: '111-11-11' },
      { id: '222', name: 'Stephanie', number: '222-22-22' },
      { id: '333', name: 'Vladimir Zelensky', number: '333-33-33' },
      { id: '444', name: 'Boris Johnson', number: '444-44-44' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    // checking name for matches
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();
    const isFoundName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName,
    );

    if (isFoundName) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    // add new contact
    const newData = { id: nanoid(5), ...data };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newData],
      };
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    // for filter
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <Form onSubmit={this.formSubmitHandler} />
        <TitleSecond>Contacts</TitleSecond>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts arr={filteredContacts} onDelContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;