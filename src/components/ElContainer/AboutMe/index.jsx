import React from 'react';
import Grid from '@material-ui/core/Grid';
import TableRow from './TableRow';
import Contacts from './Contacts';
import style from './style.css';

import AvatarImg from './images/avatar_mini.jpg';

export default function AboutMe() {
  function calculateAge() {
    const ageDifMs = Date.now() - new Date('1994-06-30').getTime();
    const ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <Grid container>
      <Grid item>
        <img
          className={style.avatar}
          src={AvatarImg}
          alt="Ошибка загрузки фото!"
        />
      </Grid>
      <Grid item xs>
        <div className={style.info}>
          <table className={style.table}>
            <colgroup>
              <col className={style.col_title} />
              <col className={style.col_data} />
            </colgroup>
            <thead />
            <tbody>
              <TableRow title="ФИО: ">Костин Сергей Станиславович</TableRow>
              <TableRow title="Родился: ">
                {`30.06.1994г.р. (${calculateAge()} лет)`}
              </TableRow>
              <TableRow title="Семейное положение: ">Холост</TableRow>
              <TableRow title="Место жительства: ">г. Нижний Новгород</TableRow>
              <TableRow title="Образование: ">
                Высшее. Окончил в 2016 году МИВлГУ имени А.Г. и Н.Г.
                Столетовых по специальности &quot;Программная инженерия&quot;.
              </TableRow>
              <TableRow title="Готовность к командировкам: ">К командировкам готов</TableRow>
            </tbody>
          </table>
        </div>
        <div>
          {/* //TODO: заменить на кнопку */}
          <Contacts />
        </div>
      </Grid>
    </Grid>
  );
}