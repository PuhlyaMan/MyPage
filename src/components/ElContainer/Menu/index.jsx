import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MenuItem from './MenuItem';
import Another from './MenuItem/Another';
import Projects from './MenuItem/Projects';
import Skils from './MenuItem/Skils';
import style from './style.css';

export default function Menu() {
  const [active, setActive] = useState(0);
  const [elem, setElem] = useState(0);

  function showActiveMenu(check, num) {
    setActive(check);
    setElem(num);
  }

  return (
    <Row>
      <Col>
        <MenuItem elem={1} active={elem === 1} showActiveMenu={showActiveMenu} item={Projects}>
          Проекты
        </MenuItem>
        <MenuItem elem={2} active={elem === 2} showActiveMenu={showActiveMenu} item={Skils}>
          Навыки
        </MenuItem>
        <MenuItem elem={3} active={elem === 3} showActiveMenu={showActiveMenu} item={Another}>
          О себе
        </MenuItem>
      </Col>
    </Row>
  );
}