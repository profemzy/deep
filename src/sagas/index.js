import {takeEvery, all} from 'redux-saga/effects';
import {PROJECTS_FETCH, ARCHIVE_PROJECT} from "../constants/actionTypes";
import {handleFetchProjects, handleArchiveProject} from './project';

function *watchAll() {
    yield all([
        takeEvery(PROJECTS_FETCH, handleFetchProjects),
        takeEvery(ARCHIVE_PROJECT, handleArchiveProject),
    ]);
}

export default watchAll;