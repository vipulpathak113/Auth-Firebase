import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''

    }
    handleChange = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.createProject(this.state);
        this.props.history.push('/')
    }

    render() {
        const { auth, projectSuccess, projectError } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={this.state.title} onChange={this.handleChange.bind(this)} required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" value={this.state.password} onChange={this.handleChange.bind(this)} required />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>

                    <div className="red-text center">
                        {projectError ? <p>{projectError}</p> : null}
                    </div>

                    <div className="green-text center">
                        {projectSuccess ? <p>{projectSuccess}</p> : null}
                    </div>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projectSuccess: state.project.projectSuccess,
        projectError: state.project.projectError,
        auth: state.firebase.auth
    }
}

const mapToDispatchProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps, mapToDispatchProps)(CreateProject)