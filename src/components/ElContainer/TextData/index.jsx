import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Projects from './Projects';
import Skils from './Skils';
import Another from './Another';

export default function TextData(props) {
  const { active } = props;

  let elem;
  if (active === 1) {
    elem = <Projects />;
  } else if (active === 2) {
    elem = <Skils />;
  } else if (active === 3) {
    elem = <Another />;
  }

  return (
    <Row>
      <Col>{elem}</Col>
    </Row>
  );
}

TextData.propTypes = {
  active: PropTypes.number.isRequired,
};