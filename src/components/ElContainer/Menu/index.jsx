import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import MenuItem from './MenuItem';

class Menu extends React.Component {

  showMenuItem = (value) => {
    const { updateAction } = this.props;
    updateAction(value);
  }

  render() {
    // TODO: Композиция?
    return (
      <Row>
        {/* TODO: <Col> в отдельный элемент */}
        <MenuItem menuItem="Проекты" showMenuItem={this.showMenuItem} item={1} />
        <MenuItem menuItem="Навыки" showMenuItem={this.showMenuItem} item={2} />
        <MenuItem menuItem="О себе" showMenuItem={this.showMenuItem} item={3} />
      </Row>
    );
  }

}

Menu.propTypes = { updateAction: PropTypes.func.isRequired };

export default Menu;