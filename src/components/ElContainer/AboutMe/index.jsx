import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Info from './Info';
import Communication from './Communication';
import style from './style-about-me.css';
import AvatarImg from './images/avatar_mini.jpg';

export default function AboutMe() {
  return (
    <Row className={style.info}>
      <Col>
        <img className={style.avatar} src={AvatarImg} alt="Ошибка загрузки фото!" />
      </Col>
      <Col>
        <Info nameClass={style.fio} title="ФИО: " value="Костин Сергей Станиславович" />
        <Info nameClass={style.birthday} title="Родился: " value="30.06.1994г.р. (25 лет)" />
        <Info nameClass={style.sity} title="Место жительства: " value="г. Нижний Новгород" />
        <Info
          nameClass={style.education}
          title="Образование: "
          value="Высшее. Окончил в 2016 году МИВлГУ имени А.Г. и Н.Г. Столетовых по специальности Программная инженерия."
        />
        <Communication />
      </Col>
    </Row>
  );
}