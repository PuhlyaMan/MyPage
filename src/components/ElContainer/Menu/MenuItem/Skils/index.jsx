import React from 'react';
import skils from './data/skils';
import style from './style.css';

export default function Skils() {
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
      <div className={style.skils}>
        <table className={style.table} key={element.id}>
          <caption className={style.header}>{element.header}</caption>
          <colgroup>
            <col className={style.col_name} />
            <col span="3" className={style.col_other} />
          </colgroup>
          <thead>
            <tr>
              <th>Название</th>
              <th>Лет использовался</th>
              <th>Последний год использования</th>
              <th>Уровень</th>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    );
  });


  return (
    <div>
      {table}
    </div>
  );
}