import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import style from './style.css';

export default function MenuItem(props) {
  const { menuItem } = props;
  return (
    <Col>
      <div
        className={style.menuitem}
        rule="menuitem"
        onClick={() => props.updateAction(1)}
      >
        { menuItem }
      </div>
    </Col>
  );
}

MenuItem.propTypes = { menuItem: PropTypes.string.isRequired };