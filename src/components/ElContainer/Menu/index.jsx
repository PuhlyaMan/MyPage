import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import MenuItem from './MenuItem';
import style from './style.css';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      padding: false,
      action: 0
    };
  }

  render() {
    // TODO: Композиция?
    return (
      <Row>
        {/* TODO: <Col> в отдельный элемент */}
        <Col>
          <div
            className={style.menuitem}
            rule="menuitem"
            onClick={() => this.props.updateAction(1)}
          >
            Проекты
          </div>
        </Col>
        <Col>
          <div
            className={style.menuitem}
            rule="menuitem"
            onClick={() => this.props.updateAction(2)}
          >
            Навыки
          </div>
        </Col>
        <Col>
          <div
            className={style.menuitem}
            rule="menuitem"
            onClick={() => this.props.updateAction(3)}
          >
            О себе
          </div>
        </Col>
      </Row>
    );
  }

}

Menu.propTypes = { updateAction: PropTypes.func.isRequired };

export default Menu;