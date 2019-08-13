import React from 'react';
import PropTypes from 'prop-types';
import style from '../style.css';

export default function TableRow(props) {
  const { title, children } = props;
  return (
    <tr className={style.row}>
      <td className={style.data}>
        <span className={style.title}>{title}</span>
      </td>
      <td className={style.data}>
        <span className={style.value}>{children}</span>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};