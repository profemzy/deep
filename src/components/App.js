import React from 'react';
import './App.css';
import Projects from './Projects';
import {connect} from 'react-redux';
import {doFetchProjects} from "../actions/project";

class App extends React.Component {

    componentDidMount() {
        this.props.onFetchProjects();
    }

    render() {
        return (
            <div className="app">
                <Projects/>
            </div>
        );
    }
};

const matchDispatchToProps = dispatch => ({
    onFetchProjects: () => dispatch(doFetchProjects())
});

export default connect(null, matchDispatchToProps)(App);
