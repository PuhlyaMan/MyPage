import React from 'react';
import style from './style.css';
import AvatarImg from './images/avatar.jpg'

const Avatar = () => {
    return (
        <div className={style.avatar}>
            <img className={style.img} src={AvatarImg} alt={'Ошибка загрузки фото!'}></img>
            <div className={style.fio}>Костин Сергей Станиславович</div>
            <div className={style.birthday}>30.06.1994г.р. (25 лет)</div>
            <div className={style.sity}>г. Нижний Новгород</div>
        </div>
    )
};

export default Avatar;