import {call, put} from 'redux-saga/effects';
import {doLoadProjects, doFetchErrorProjects, doLoadUpdatedProject} from '../actions/project';
import {fetchProjects, archiveProject} from "../api/project";

function* handleFetchProjects() {
    try {
        const result = yield call(fetchProjects);
        yield put(doLoadProjects(result));
    } catch (error) {
        yield put(doFetchErrorProjects(error));
    }
}

function* handleArchiveProject(){
    const result = yield call(archiveProject);
    console.log(result);
    yield put(doLoadUpdatedProject(result));
}

export {
    handleFetchProjects,
    handleArchiveProject
}