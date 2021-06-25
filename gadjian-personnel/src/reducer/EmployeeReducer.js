let INITIAL_STATE = {
    dataEmployee: []
}

const employeeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_EMPLOYEE":
            return {
                ...state,
                dataEmployee: action.payload
            }
        default:
            return state
    }
}

export default employeeReducer