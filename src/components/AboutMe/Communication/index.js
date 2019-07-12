import React from 'react';
import style from '../style-about-me.css';

export default () => {
    return (
        <p>
            <span className={style.bold}>Как связаться:</span>
            <li>
                <span className={style.bold}>Моб. телефон: </span>
                <a href="tel:+7(929)0518725">+7(929)051-87-25</a>    
            </li>
            <li>
                <span className={style.bold}>Эл. почта: </span>
                <a href="mailto:dr.zad1994@gmail.com">dr.zad1994@gmail.com</a>
            </li>
            <li>
                <span className={style.bold}>Skype: </span>
                advokat_hp
            </li>
        </p>
    );
}


