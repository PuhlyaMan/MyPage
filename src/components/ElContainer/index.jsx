import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import AboutMe from './AboutMe';
import Menu from './Menu';
import Footer from './Footer';
import CommunicationForm from './CommunicationForm';

const useStyle = makeStyles({
  elContainer: {
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    fontSize: '1rem',
  },
});

export default function ElContainer() {
  const classes = useStyle();

  return (
    <Container className={classes.elContainer} maxWidth="xl">
      <AboutMe />
      <Menu />
      <CommunicationForm />
      <Footer />
    </Container>
  );
}