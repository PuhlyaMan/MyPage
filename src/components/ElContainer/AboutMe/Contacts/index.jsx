import React from 'react';
import style from '../style.css';

export default function Contacts() {
  return (
    <div className={style.contact}>
      <span className={style.title}>Как связаться:</span>
      <li className={style.item}>
        <span className={style.title}>Моб. телефон: </span>
        <a href="tel:+7(929)0518725">+7(929)051-87-25</a>
      </li>
      <li className={style.item}>
        <span className={style.title}>Эл. почта: </span>
        <a href="mailto:dr.zad1994@gmail.com">dr.zad1994@gmail.com</a>
      </li>
      <li className={style.item}>
        <span className={style.title}>Skype: </span>
        advokat_hp
      </li>
    </div>
  );
}