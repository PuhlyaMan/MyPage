import React from 'react';
import Grid from '@material-ui/core/Grid';
import Info from './Info';
import Contacts from './Contacts';
import style from './style.css';

import AvatarImg from './images/avatar_mini.jpg';

export default function AboutMe() {
  return (
    <Grid container>
      <Grid item>
        <img
          className={style.image}
          src={AvatarImg}
          alt="Ошибка загрузки фото!"
        />
      </Grid>
      <Grid item xs>
        <div className={style.info}>
          <Info title="ФИО: ">Костин Сергей Станиславович</Info>
          <Info title="Родился: ">30.06.1994г.р. (25 лет)</Info>
          <Info title="Место жительства: ">г. Нижний Новгород</Info>
          <Info title="Образование: ">
            Высшее. Окончил в 2016 году МИВлГУ имени А.Г. и Н.Г.
            Столетовых по специальности &quot;Программная инженерия&quot;.
          </Info>
          <Contacts />
        </div>
      </Grid>
    </Grid>
  );
}