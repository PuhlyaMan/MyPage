import React, { useState } from 'react';
import style from './style.css';

import contact from '../images/contact.png';
import telephone from '../images/telephone.png';
import gmail from '../images/gmail.png';
import skype from '../images/skype.png';

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
        <div>
          <li className={style.item}>
            <img className={style.contact_icon} src={telephone} alt="telephone" />
            <a href="tel:+7(929)0518725">
              <span className={style.value}>+7(929)051-87-25</span>
            </a>
          </li>
          <li className={style.item}>
            <img className={style.contact_icon} src={gmail} alt="telephone" />
            <a href="mailto:dr.zad1994@gmail.com">
              <span className={style.value}>dr.zad1994@gmail.com</span>
            </a>
          </li>
          <li className={style.item}>
            <img className={style.contact_icon} src={skype} alt="telephone" />
            <span className={style.value}>advokat_hp</span>
          </li>
        </div>
      </div>
    </div>
  );
}