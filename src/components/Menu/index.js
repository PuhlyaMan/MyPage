import React from 'react';
import style from './style-menu.css'
import {Row, Col} from 'react-bootstrap'

export default () => {
    return (
        <Row>
            <Col><li>Проекты</li></Col>
            <Col><li>Навыки</li></Col>
            <Col><li>О себе</li></Col>
        </Row>
    )
}