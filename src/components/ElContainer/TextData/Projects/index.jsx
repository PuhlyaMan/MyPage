import React from 'react';
import Project from './Project';
import projects from './data/projects';

export default function Projects() {
  const projElem = projects.map(element => (
    <Project
      key={element.id}
      company={element.company}
      post={element.post}
      project={element.project}
      role={element.role}
      subsystem={element.subsystem}
      duties={element.duties}
      technologys={element.technologys}
    />
  ));

  return (
    <div>
      <div style={{ fontWeight: 'bold', fontSize: '40px', textAlign: 'center' }}>
        Проекты
      </div>
      {projElem}
    </div>
  );
}