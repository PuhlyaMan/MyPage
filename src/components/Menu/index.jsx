import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import style from './style.css';

export default function Menu(props) {
  // TODO: Композиция?
  return (
    <Row>
      {/* TODO: <Col> в отдельный элемент */}
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

Menu.propTypes = { updateAction: PropTypes.func.isRequired };