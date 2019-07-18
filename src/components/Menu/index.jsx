import React from 'react';
import { Row, Col } from 'react-bootstrap';
import style from './style.css';

export default function Menu(props) {
  // TODO: Композиция?
  return (
    <Row>
      <Col>
        <div 
          className={style.menuitem} 
          rule="menuitem" 
          onClick={() => props.updateAction(1)}
        >
          Проекты
        </div>
      </Col>
      <Col>
        <div 
          className={style.menuitem} 
          rule="menuitem" 
          onClick={() => props.updateAction(2)}
        >
          Навыки
        </div>
      </Col>
      <Col>
        <div 
          className={style.menuitem} 
          rule="menuitem" 
          onClick={() => props.updateAction(3)}
        >
          О себе
        </div>
      </Col>
    </Row>
  );
}