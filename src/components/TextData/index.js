import React from "react";
import Project from "./Project";
import Skils from "./Skils";
import Summary from "./Summary";
import { Row, Col } from "react-bootstrap";

class TextData extends React.Component {
  render() {
    return (
      <Row>
        <Col><Project /></Col>
      </Row>
    );
  }
}

export default TextData;
