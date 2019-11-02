// const isNotArchived = archivedIds => project =>
//     archivedIds.indexOf(project.id) === -1;


// const getActiveProjects = ({projectState, archiveState}) =>
//     projectState.projects.filter(isNotArchived(archiveState));

const getActiveProjects = ({projectState}) =>
    projectState.projects.filter(project => project.active === true);

const getFetchError = ({projectState}) =>
    projectState.error;


export {getActiveProjects, getFetchError};