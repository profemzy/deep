import {
    PROJECTS_LOAD,
    PROJECTS_FETCH_ERROR
} from "../constants/actionTypes";

const INITIAL_STATE = {
    projects: [],
    error: null
};

const applyLoadProjects = (state, action) => ({
    projects: action.projects,
    error: null,
    updated_project:  {}
});

const applyFetchErrorProjects = (state, action) => ({
    projects: [],
    error: action.error
});

// const applyArchiveProject = (state, action) => ({
//     projects: [],
//     error: null,
//     updated_project: action.project
// });


function projectReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case PROJECTS_LOAD : {
            return applyLoadProjects(state, action);
        }
        case PROJECTS_FETCH_ERROR: {
            return applyFetchErrorProjects(state, action);
        }
        default:
            return state;
    }
}

export default projectReducer;
