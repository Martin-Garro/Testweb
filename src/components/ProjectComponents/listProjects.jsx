// src/components/ProjectComponents/ListProjects.js
import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Projects';

const ListProjects = ({ projects }) => {
  return (
    <div>
      <h2>Lista de Proyectos</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/my-projects/${project.id}`}>
            <h3>{project.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListProjects;