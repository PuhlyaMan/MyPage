import React from 'react';
import style from './style-info.css';
import AvatarImg from './images/avatar.jpg'
import { Row, Col } from 'react-bootstrap';

const Info = () => {
    return (
        <Row className={style.info}>
            <Col>
                <img className={style.avatar} src={AvatarImg} alt={'Ошибка загрузки фото!'}></img>
            </Col>
            <Col>
                <p className={style.fio}>Костин Сергей Станиславович</p>
                <p className={style.birthday}>30.06.1994г.р. (25 лет)</p>
                <p className={style.sity}>г. Нижний Новгород</p>
                <p className={style.education}>Высшее. МИВлГУ имени А.Г. и Н.Г. Столетовых. Окончил в 2012 году по специальности "Программная инженерия"</p>
            </Col>
        </Row>
    )
};

export default Info;