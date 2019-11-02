import {PROJECT_ARCHIVE, PROJECTS_LOAD} from "../constants/actionTypes";

const INITIAL_STATE = {
    updated_project: {},
    projects: []
};

// const applyArchiveProject = (state, action) => {
//     ...state,
// }
// [...state, action.project];

const applyLoadProjects = (state, action) => ({
    projects: action.projects,
    updated_project: {}
});

function archiveReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case PROJECTS_LOAD : {
            return applyLoadProjects(state, action);
        }

        case PROJECT_ARCHIVE :
            return {
                ...state,
                updated_project: state.projects.map(project => {
                    return project._id.$oid === action.id ?
                        {...project, active: false} : project
                })
            };
        default:
            return state;
    }
}

export default archiveReducer;