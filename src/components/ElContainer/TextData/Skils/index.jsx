import React from 'react';
import skils from './data/skils';
import style from './style.css';

export default function Skils() {
  // TODO: проблема с индексами
  const table = skils.map((element) => {
    const data = element.abilities.map(row => (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.colYear}</td>
        <td>{row.lastYear}</td>
        <td>{row.level}</td>
      </tr>
    ));

    return (
      <table className={style.table} key={element.id}>
        <caption className={style.header}>{element.header}</caption>
        <tr>
          <th>Название</th>
          <th>Лет использовался</th>
          <th>Последний год использования</th>
          <th>Уровень</th>
        </tr>
        {data}
      </table>
    );
  });


  return (
    <div>
      <div className={style.caption}>Навыки</div>
      {table}
    </div>
  );
}