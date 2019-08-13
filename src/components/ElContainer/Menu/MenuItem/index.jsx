import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export default function MenuItem(props) {
  const { elem, active, showActiveMenu, item, children } = props;

  const headerClass = active ? style.header_active : style.header;
  const bodyClass = active ? style.body_active : style.body_non_active;
  return (
    <div className={style.card}>
      <div className={headerClass} onClick={() => showActiveMenu(!active ? elem : 0)}>
        {children}
      </div>
      <div className={style.item}>
        <div className={bodyClass}>
          {item()}
        </div>
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