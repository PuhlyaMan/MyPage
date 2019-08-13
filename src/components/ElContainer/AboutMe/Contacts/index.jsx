import React, { useState } from 'react';
import style from '../style.css';

import contact from '../images/contact.jpg';

export default function Contacts() {
  const [show, showContact] = useState(false);

  const contactClass = show ? style.contact_active : style.contact_non_active;
  return (
    <div className={style.contact}>
      <div className={style.div_img}>
        <img
          role="presentation"
          onClick={() => showContact(!show)}
          className={style.contact_img}
          src={contact}
          alt="Контакты"
        />
      </div>
      <div className={contactClass}>
        <li className={style.item}>
          <span>Моб. телефон: </span>
          <a href="tel:+7(929)0518725">+7(929)051-87-25</a>
        </li>
        <li className={style.item}>
          <span>Эл. почта: </span>
          <a href="mailto:dr.zad1994@gmail.com">dr.zad1994@gmail.com</a>
        </li>
        <li className={style.item}>
          <span>Skype: </span>
          advokat_hp
        </li>
      </div>
    </div>
  );
}