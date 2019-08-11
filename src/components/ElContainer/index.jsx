import React from 'react';
// TODO: Material-ui
// import { Container } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import AboutMe from './AboutMe';
import Menu from './Menu';
import Footer from './Footer';
import CommunicationForm from './CommunicationForm';

export default function ElContainer() {
  return (
    <Container maxWidth="lg">
      <AboutMe />
      <Menu />
      <CommunicationForm />
      <Footer />
    </Container>
  );
}