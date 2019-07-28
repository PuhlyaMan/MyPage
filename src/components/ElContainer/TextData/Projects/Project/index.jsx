import React from 'react';
import PropTypes from 'prop-types';
import style from '../style.css';

export default function Project(props) {
  const { company, post, project, role, subsystem, duties, technologys } = props;

  return (
    <div className={style.job}>
      <div className={style.company}>{company}</div>
      <div className={style.post}>
        <span className={style.definition}>Должность: </span>
        {post}
      </div>
      <div className={style.project}>
        <span className={style.definition}>Проект: </span>
        {project}
      </div>
      <div className={style.role}>
        <span className={style.definition}>Роль: </span>
        {role}
      </div>
      { subsystem.length > 0 ? (
        <div className={style.subsystem}>
          <span className={style.definition}>Участие в разработке подсистем: </span>
          {subsystem.map(elem => (
            <li className={style.listitem} key={elem.id}>
              {elem.name}
            </li>
          ))}
        </div>
      ) : null}
      <div className={style.duties}>
        <span className={style.definition}>Обязанности: </span>
        {duties.map(elem => (
          <li className={style.listitem} key={elem.id}>
            {elem.duty}
          </li>
        ))}
      </div>
      <div className={style.technologys}>
        <span className={style.definition}>Технологии: </span>
        {technologys}
      </div>
    </div>
  );
}

Project.defaultProps = {
  subsystem: [],
};

Project.propTypes = {
  company: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  subsystem: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  duties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    duty: PropTypes.string,
  })).isRequired,
  technologys: PropTypes.string.isRequired,
};