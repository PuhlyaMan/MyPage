import React from 'react';
import PropTypes from 'prop-types';

export default function Info(props) {
  const { nameClass, title, value } = props;
  return (
    <p className={nameClass}>
      <span style={{ fontWeight: 'bold' }}>{title}</span>
      {value}
    </p>
  );
}

Info.propTypes = {
  nameClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};