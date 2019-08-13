import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import AboutMe from './AboutMe';
import Menu from './Menu';
import Footer from './Footer';
import FirstCompomemt from './FirstCompomemt';
import CommunicationForm from './CommunicationForm';
import './style.css';

export default function ElContainer() {
  const [show, setShowInfo] = useState(false);

  if (!show) {
    return (
      <Container maxWidth="xl">
        <AboutMe />
        <Menu />
        <CommunicationForm />
        <Footer />
      </Container>
    );
  }

  return <FirstCompomemt setShowInfo={setShowInfo} />;
}