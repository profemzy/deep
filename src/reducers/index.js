import {combineReducers} from "redux";
import projectReducer from "./project";
import archiveReducer from "./archive";

const rootReducer = combineReducers({
    projectState: projectReducer,
    archiveState: archiveReducer
});

export default rootReducer;
