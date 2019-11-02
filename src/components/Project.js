import React from 'react';
import {connect} from 'react-redux';
import {doArchiveProject} from "../actions/archive";
import './Project.css';
import {ButtonInline} from "./Button";


const Project = ({project, columns, onArchive}) => {

    const {name, duration, goal, company_id} = project;

    return (
        <div className="project">
            <span style={{width: columns.name.width}}>
                <a href={`/projects/${project._id.$oid}`}>{name}</a>
            </span>
            <span style={{width: columns.duration.width}}>{duration}</span>
            <span style={{width: columns.goal.width}}>{goal}</span>
            <span style={{width: columns.company.width}}>{company_id}</span>
            <span style={{width: columns.archive.width}}>
                <ButtonInline type="button" onClick={() => onArchive(project._id.$oid)}>
                    Archive
                </ButtonInline>
           </span>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    onArchive: id => dispatch(doArchiveProject(id)),
});

export default connect(null, mapDispatchToProps) (Project);
