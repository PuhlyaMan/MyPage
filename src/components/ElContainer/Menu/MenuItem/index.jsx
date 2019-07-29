import React from 'react';
import PropTypes from 'prop-types';
import { Card, Accordion } from 'react-bootstrap';
import style from './style.css';

export default function MenuItem(props) {
  const { active, item, children } = props;

  return (
    <Card className={style.card}>
      <Card.Header className={style.header}>
        <Accordion.Toggle as={Card.Header} eventKey={active}>
          {children}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={active}>
        <Card.Body>
          {item()}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  item: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};