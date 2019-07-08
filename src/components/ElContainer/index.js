import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "../AboutMe";
import Menu from "../Menu";
import TextData from "../TextData";

class ElContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        action: 0,
    }
  }

  /*updateAction = (value) => {
    this.setState({
      action: value,    
    });
  }*/

  render() {
    return (
      <Container>
        <AboutMe />
        {/*<Menu updateAction={this.updateAction}/>*/}
        <Menu />
        <TextData />
      </Container>
    );
  }
}

export default ElContainer;
