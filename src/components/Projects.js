import React from 'react';
import {connect} from 'react-redux';
import {getActiveProjects, getFetchError} from "../selectors/project";
import './Projects.css';
import Project from './Project';

const COLUMNS = {
    name: {
        label: "Name",
        width: "40%"
    },
    duration: {
        label: "Duration",
        width: "30%"
    },
    goal: {
        label: "Goal",
        width: "10%"
    },
    company: {
        label: "Company",
        width: "10%"
    },
    archive: {
        width: "10%"
    }
};

const Projects = ({projects, error}) => (
    <div className="projects">
        <ProjectsHeader columns={COLUMNS}/>

        {error && <p className="error">Something went wrong ...</p>}

        {(projects || []).map(project => (
            <Project
                key={project._id.$oid}
                project={project}
                columns={COLUMNS}
            />
        ))}
    </div>
);

const ProjectsHeader = ({columns}) => (
    <div className="projects-header">
        {Object.keys(columns).map(key => (
            <span key={key} style={{width: columns[key].width}}>
                {columns[key].label}
            </span>
        ))}
    </div>
);

const mapStateToProps = state => ({
    projects: getActiveProjects(state),
    error: getFetchError(state)
});

export default connect(mapStateToProps,)(Projects);
