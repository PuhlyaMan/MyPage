import React from 'react';
import git from './images/github.png';
import vk from './images/vk.png';
import hh from './images/hh.png';
import style from './style.css';

// TODO: добавить ссылку на ВК
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <a href="https://github.com/PuhlyaMan" target="_blank" rel="noopener noreferrer">
          <div className={style.git}>
            <img className={style.git_img} src={git} alt="Ошибка загрузки файла" />
          </div>
        </a>
        <a href="https://nn.hh.ru/resume/bea9f11eff069c5c080039ed1f687846735268" target="_blank" rel="noopener noreferrer">
          <div className={style.hh}>
            <img className={style.hh_img} src={hh} alt="Ошибка загрузки файла" />
          </div>
        </a>
        <a href="https://vk.com/id530952726" target="_blank" rel="noopener noreferrer">
          <div className={style.vk}>
            <img className={style.vk_img} src={vk} alt="Ошибка загрузки файла" />
          </div>
        </a>
      </div>
      <div className={style.copy}>&#169;2019 MyPage by Костин Сергей</div>
    </footer>
  );
}