import React from 'react';
import style from './style-info.css';
import AvatarImg from './images/avatar.jpg'
import { Row, Col } from 'react-bootstrap';

const Info = () => {
    return (
        <Row className='info'>
            <Col>
                <img className='avatar' src={AvatarImg} alt={'Ошибка загрузки фото!'}></img>
            </Col>
            <Col>
                <p className='fio'>Костин Сергей Станиславович</p>
                <p className='birthday'>30.06.1994г.р. (25 лет)</p>
                <p className='sity'>г. Нижний Новгород</p>
                <p className='education'>Высшее. Окончил в 2016 году МИВлГУ имени А.Г. и Н.Г. Столетовых по специальности "Программная инженерия".</p>
            </Col>
        </Row>
    )
};

export default Info;