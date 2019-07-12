import React from "react";
import style from "./style-menu.css";
import TextData from "../TextData";
import { Row, Col } from "react-bootstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  //TODO: Композиция?
  render() {
    return (
      <Row>
        <Col>
          <a href="#" onClick={() => this.props.updateAction(1)}>
            Проекты
          </a>
        </Col>
        <Col> 
          <a href="#" onClick={() => this.props.updateAction(2)}>
            Навыки
          </a>
        </Col>
        <Col>
          <a href="#" onClick={() => this.props.updateAction(3)}>
            О себе
          </a>
        </Col>
      </Row>
    );
  }
}

export default Menu;
