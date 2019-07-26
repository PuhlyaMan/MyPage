import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import MenuItem from './MenuItem';

export default function Menu(props) {
  const { updateActive, active } = props;
  const showMenuItem = (value) => {
    updateActive(value);
  };
  // TODO: Композиция?
  return (
    <Row>
      <MenuItem active={active} showMenuItem={showMenuItem} item={1}>Проекты</MenuItem>
      <MenuItem active={active} showMenuItem={showMenuItem} item={2}>Навыки</MenuItem>
      <MenuItem active={active} showMenuItem={showMenuItem} item={3}>О себе</MenuItem>
    </Row>
  );
}

Menu.propTypes = {
  updateActive: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};