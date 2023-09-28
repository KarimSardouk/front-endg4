// ImageList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ProjectsList = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects'); // Assuming your API route for getting skills is '/api/skills'
        const projects = response.data;
        const names = projects.map(project => project.name);
        setNames(names);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>{name}</p>

      ))}
    </div>
  );
};

export default ProjectsList;
