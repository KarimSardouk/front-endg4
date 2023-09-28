import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
const Projects = () => {
  const [names, setNames] = useState([]);
  const [descriptions,setDescriptions] =useState([]);
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects'); // Assuming your API route for getting skills is '/api/skills'
        
        const projects = response.data;
        const names = projects.map(project => project.name);
        const descriptions = projects.map(project => project.description);
        
        setNames(names);
        setDescriptions(descriptions);
        const data= projects.map((project) => ({
          name:project.name,
          description:project.description
        }));
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>PROJECTS</h1>
      <div className="cards">
        
      {data.map((data,index) => (
        <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front"> 
        <p  className="title-project" key={index}>{data.name}</p>
        </div> 
        <div className="flip-card-back" > 
        <p key={index}> {data.description}
        </p>
        </div>
        </div>
        </div>
      ))}
    
          
        
      </div>
    </div>
  );
};

export default Projects;


// const arr1 = ['a1', 'a2', 'a3'];
// const arr2 = ['b1', 'b2', 'b3'];
// 
// const merged = [];
// 
// for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    // if (i < arr1.length) {
        // merged.push(arr1[i]);
    // }
    // if (i < arr2.length) {
        // merged.push(arr2[i]);
    // }
// }
// 
// console.log(merged);

// <div className="flip-card-front"> 
// <p className="title-project"> Portfolio for Stone Age Group </p> 
// </div> 
// <div className="flip-card-back"> 
// <p>  A portfolio is being created using WordPress. The portfolio  comprises various sections about the work of Stone Age group and provides viewers with the ability to contact them via email. 
// </p>
// </div> 