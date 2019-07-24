import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Projects from './Projects';
import Skils from './Skils';
import Another from './Another';

export default function TextData(props) {
  const { action } = props;

  let elem;
  if (action === 1) {
    elem = <Projects />;
  } else if (action === 2) {
    elem = <Skils />;
  } else if (action === 3) {
    elem = <Another />;
  }

  return (
    <Row>
      <Col>{elem}</Col>
    </Row>
  );
}

TextData.propTypes = { action: PropTypes.number.isRequired };