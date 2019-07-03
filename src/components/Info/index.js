import React from 'react';
import style from './style.css';
import AvatarImg from './images/avatar.jpg'

export default () => {
    return (
        <div className={style.info}>
            <img className={style.avatar} src={AvatarImg} alt={'Ошибка загрузки фото!'}></img>
            <p className={style.fio}>Костин Сергей Станиславович</p>
            <p className={style.birthday}>30.06.1994г.р. (25 лет)</p>
            <p className={style.sity}>г. Нижний Новгород</p>
            <p className={style.education}>Высшее. МИВлГУ имени А.Г. и Н.Г. Столетовых. Окончил в 2012 году по специальности "Программная инженерия"</p>
        </div>
    )
};