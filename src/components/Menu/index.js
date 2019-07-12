import React from "react";
import style from "./style-menu.css";
import { Row, Col } from "react-bootstrap";

//TODO: реализовать через Redux (Context)
class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className={style.menu}>
        <Col>
          <li className={style.menu_item} onClick={() => this.props.updateAction(1)}>
          <span className={style.label}>Проекты</span>
          </li>
        </Col>
        <Col> 
          <li className={style.menu_item} onClick={() => this.props.updateAction(2)}>
          <span className={style.label}>Навыки</span>
          </li>
        </Col>
        <Col>
          <li className={style.menu_item} onClick={() => this.props.updateAction(3)}>
          <span className={style.label}>О себе</span>
          </li>
        </Col>
      </Row>
    );
  }
}

export default Menu;
