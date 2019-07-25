import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import style from './style.css';

export default function MenuItem(props) {
  const { children, showMenuItem, item, active } = props;
  const styleItem = (item === active) ? style.menuitem_active : style.menuitem;
  return (
    <Col>
      <div
        className={styleItem}
        rule="menuitem"
        onClick={() => showMenuItem(item)}
      >
        { children }
      </div>
    </Col>
  );
}

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  showMenuItem: PropTypes.func.isRequired,
  item: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};