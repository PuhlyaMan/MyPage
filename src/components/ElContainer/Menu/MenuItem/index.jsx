import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import style from './style.css';

export default function MenuItem(props) {
  const { menuItem, showMenuItem, item } = props;
  return (
    <Col>
      <div
        className={style.menuitem}
        rule="menuitem"
        onClick={() => showMenuItem(item)}
      >
        { menuItem }
      </div>
    </Col>
  );
}

MenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired,
  showMenuItem: PropTypes.func.isRequired,
  item: PropTypes.number.isRequired,
};