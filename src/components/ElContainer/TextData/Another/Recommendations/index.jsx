import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import recommendations from './data/recommendations';
import style from '../style.css';
import Info from './images/info.png';

export default function Recommendations(props) {
  const { children } = props;
  const recommendation = recommendations.map(element => (
    <div key={element.id} className={style.recommendation}>
      <div className={style.company}>{element.company}</div>
      <div className={style.from}>{element.from}</div>
    </div>
  ));

  // TODO: настройить react/jsx-wrap-multilines
  return (
    <div className={style.block}>
      <div className={style.caption}>
        { children }
        <OverlayTrigger
          key="right"
          placement="right"
          overlay={
            <Tooltip id="tooltip-right">
              При необходимости, спрашивайте контактные данные для связи с рекомендатором
            </Tooltip>
          }
        >
          <img
            className={style.image}
            src={Info}
            alt="Ошибка загрузки"
          />
        </OverlayTrigger>
      </div>

      <div className={style.container}>{recommendation}</div>
    </div>
  );
}

Recommendations.propTypes = { children: PropTypes.string.isRequired };