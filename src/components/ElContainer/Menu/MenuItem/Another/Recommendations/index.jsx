import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import recommendations from './data/recommendations';
import style from '../style.css';
import Info from './images/info.png';

export default function Recommendations() {
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
        Рекомендации
        <Tooltip
          disableFocusListener
          title="При необходимости, спрашивайте контактные данные для связи с рекомендатором"
          placement="right"
        >
          <img
            className={style.image}
            src={Info}
            alt="Ошибка загрузки"
          />
        </Tooltip>
      </div>
      <div className={style.container}>{recommendation}</div>
    </div>
  );
}