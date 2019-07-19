import React from 'react';
import Project from './Project';
import projects from './projects';

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
      {projElem}
    </div>
  );
}