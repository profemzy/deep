// Action Creator
import {PROJECT_ARCHIVE} from "../constants/actionTypes";

const doArchiveProject = id => ({
    type: PROJECT_ARCHIVE,
    id
});

export {doArchiveProject, };