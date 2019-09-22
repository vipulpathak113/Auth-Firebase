

const initState = {
    projectSuccess: null,
    projectError: null
}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("created successfully", action.project)
            return {
                ...state,
                projectSuccess: 'New Project Created successfully',
                projectError: null

            };
        case 'CREATE_PROJECT_ERROR':
            console.log("created error", action.err)
            return {

                projectError: 'Project not created',
                projectSuccess: null
            };
        default:
            return state;
    }
}

export default projectReducer