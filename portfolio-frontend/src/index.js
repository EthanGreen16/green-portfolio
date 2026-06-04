import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { NavBar } from './NavBar';
import { Homepage } from './pages/homepage/Homepage';
import { Skills } from './pages/skills/Skills';
import { Projects } from './pages/projects/Projects';
import { Experience } from './pages/experience/Experience';

document.title = "Ethan Green - Portfolio";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <NavBar />
    <div style={{ minHeight: '40rem'}}>
      <Homepage />
      <Skills />
      <Experience />
      <Projects />
    </div>
  </React.StrictMode>
);

reportWebVitals();
