import React from "react";
import style from "./style-menu.css";
import TextData from "../TextData";
import { Row, Col } from "react-bootstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 0,
    }
  }

  showData = (value) => {
      this.setState({
        action: value,
      });
    }

  render() {
    return (
      <Row>
        <Col>
          <a href="#" onClick={this.showData.bind(this, 0)}>
          {/*<a href="#" onClick={this.props.updateAction(0)}>*/}
            Проекты
          </a>
        </Col>
        <Col> 
          <a href="#" onClick={this.showData.bind(this, 1)}>
          {/*<a href="#" onClick={this.props.updateAction(1)}>*/}
            Навыки
          </a>
        </Col>
        <Col>
          <a href="#" onClick={this.showData.bind(this, 2)}>
          {/*<a href="#" onClick={this.props.updateAction(2)}>*/}
            О себе
          </a>
        </Col>
      </Row>
    );
  }
}

export default Menu;
