// src/App.js
import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ListProjects from './components/ProjectComponents/ListProjects';
import ProjectDetails from './components/ProjectComponents/ProjectDetails';

function App() {
  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del Proyecto 1",
      icon: "icon-1.png",
      members: [101, 102, 103],
      epics: ["Epic A", "Epic B"],
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción del Proyecto 2",
      icon: "icon-2.png",
      members: [104, 105, 106],
      epics: ["Epic X", "Epic Y"],
    },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/my-projects" element={<ListProjects projects={projects} />}/>
          <Route path="/my-projects/:projectId" exact element={<ProjectDetails projects={projects} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
