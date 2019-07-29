import React from 'react';
// TODO: Material-ui
import { Container } from 'react-bootstrap';
import AboutMe from './AboutMe';
import Menu from './Menu';
import CommunicationForm from './CommunicationForm';

export default function ElContainer() {
  return (
    <Container>
      <AboutMe />
      <Menu />
      <CommunicationForm />
    </Container>
  );
}