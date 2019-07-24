import React from 'react';
import PropTypes from 'prop-types';
import characteristics from './data/characteristics';
import style from '../style.css';

export default function Characteristics(props) {
  const { children } = props;
  const characteristic = characteristics.map(element => (
    <li key={element.id} className={style.listitem}>{element.item}</li>
  ));

  return (
    <div className={style.block}>
      <div className={style.caption}>{ children }</div>
      <div className={style.container}>{characteristic}</div>
    </div>
  );
}

Characteristics.propTypes = { children: PropTypes.string.isRequired };