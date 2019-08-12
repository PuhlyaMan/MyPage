import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export default function MenuItem(props) {
  const { elem, active, showActiveMenu, item, children } = props;

  const nameclass = active ? style.body_active : style.body_non_active;
  return (
    <div className={style.card}>
      <div className={style.header} onClick={() => showActiveMenu(!active ? elem : 0)}>
        {children}
      </div>
      <div className={nameclass}>
        {item()}
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  item: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  elem: PropTypes.number.isRequired,
  showActiveMenu: PropTypes.func.isRequired,
};