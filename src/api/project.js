import axios from 'axios';

const PROJECTS_URL = 'http://localhost:5000/api/projects';

const fetchProjects = () =>
    axios.get(PROJECTS_URL)
        .then(response => response.data)

const archiveProject = project => {
    const data = {
        name: project.name,
        duration: project.duration,
        goal: project.goal,
        company: project.company
    };
    axios.put(`${PROJECTS_URL}/update`, data)
        .then(response => response.data)
};

export {
    fetchProjects,
    archiveProject,
}