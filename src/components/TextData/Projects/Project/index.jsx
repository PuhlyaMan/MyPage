import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export default function Project(props) {
  const { company, post, project, role, subsystem, duties, technologys } = props;

  return (
    <div className={style.projectDiv}>
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
      { subsystem ? (
        <div className={style.subsystem}>
          {subsystem}
        </div>
      ) : null}
      <div className={style.duties}>{duties}</div>
      <div className={style.technologys}>
        <span className={style.definition}>Технологии: </span>
        {technologys}
      </div>
    </div>
  );
}

Project.defaultProps = { subsystem: null };

Project.propTypes = {
  company: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  subsystem: Project.string,
  duties: PropTypes.string.isRequired,
  technologys: PropTypes.string.isRequired,
};