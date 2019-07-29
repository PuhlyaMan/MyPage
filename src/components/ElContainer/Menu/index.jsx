import React from 'react';
import { Row, Accordion } from 'react-bootstrap';
import MenuItem from './MenuItem';
import Another from './MenuItem/Another';
import Projects from './MenuItem/Projects';
import Skils from './MenuItem/Skils';
import style from './style.css';

export default function Menu() {
  return (
    <Row>
      <Accordion className={style.accordion}>
        <MenuItem active="0" item={Projects}>Проекты</MenuItem>
        <MenuItem active="1" item={Skils}>Навыки</MenuItem>
        <MenuItem active="2" item={Another}>О себе</MenuItem>
      </Accordion>
    </Row>
  );
}