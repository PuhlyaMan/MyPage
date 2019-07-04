import React from 'react';
import style from './style-info.css';
import AvatarImg from './images/avatar.jpg'
import { Row, Col } from 'react-bootstrap';

const Info = () => {
    console.log(style.info);
    console.log(style.fio);
    console.log(style.sity);
    console.log(style.education);
    return (
        <Row className={style.info}>
            <Col>
                <img className={style.avatar} src={AvatarImg} alt={'Ошибка загрузки фото!'}></img>
            </Col>
            <Col>
                <p className={style.fio}>Костин Сергей Станиславович</p>
                <p className={style.birthday}>30.06.1994г.р. (25 лет)</p>
                <p className={style.sity}>г. Нижний Новгород</p>
                <p className={style.education}>Высшее. Окончил в 2016 году МИВлГУ имени А.Г. и Н.Г. Столетовых по специальности "Программная инженерия".</p>
            </Col>
        </Row>
    )
};

export default Info;