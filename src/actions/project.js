import {
    PROJECTS_LOAD,
    PROJECT_LOAD,
    PROJECTS_FETCH,
    PROJECTS_FETCH_ERROR
} from "../constants/actionTypes";

const doFetchProjects = () => ({
    type: PROJECTS_FETCH
});

const doFetchErrorProjects = error => ({
    type: PROJECTS_FETCH_ERROR,
    error
});

const doLoadProjects = projects => ({
    type: PROJECTS_LOAD,
    projects
});

const doLoadUpdatedProject = project => ({
    type:  PROJECT_LOAD,
    project
});

export {doFetchProjects, doLoadProjects, doFetchErrorProjects, doLoadUpdatedProject}