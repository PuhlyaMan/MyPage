import React from 'react';
import PropTypes from 'prop-types';
import style from '../style.css';

export default function Info(props) {
  const { title, children } = props;
  return (
    <div>
      <span className={style.title}>{title}</span>
      {children}
    </div>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};