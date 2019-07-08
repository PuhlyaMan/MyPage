import React from "react";
import Project from "./Project";
import Skils from "./Skils";
import Summary from "./Summary";
import { Row, Col } from "react-bootstrap";

class TextData extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { action } = this.props;
    const elem = action === 1 ? <Project /> : action === 2 ? <Skils /> : action === 3 ? <Summary /> : '';
    return (
      <Row>
        <Col>{elem}</Col>
      </Row>
    );
  }
}

export default TextData;