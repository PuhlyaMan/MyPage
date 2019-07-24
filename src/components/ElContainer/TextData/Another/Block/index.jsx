import React from 'react';
import PropTypes from 'prop-types';
import characteristics from './data/characteristics';
import recommendations from './data/recommendations';
import style from './style.css';

export default function Block(props) {
  const { code, children } = props;

  const renderBlok = (block) => {
    let container;
    switch (block) {
      case 'char':
        container = characteristics.map(element => (
          <li key={element.id} className={style.listitem}>{element.item}</li>
        ));
        break;
      case 'rec':
        container = recommendations.map(element => (
          <div key={element.id} className={style.recommendation}>
            <div className={style.company}>{element.company}</div>
            <div className={style.from}>{element.from}</div>
          </div>
        ));
        break;
      default:
        container = '';
    }
    return container;
  };

  return (
    <div className={style.block}>
      <div className={style.caption}>{ children }</div>
      <div className={style.container}>{renderBlok(code)}</div>
    </div>
  );
}

Block.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};