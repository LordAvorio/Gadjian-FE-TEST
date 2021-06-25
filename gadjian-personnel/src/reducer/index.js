import {combineReducers} from 'redux'

import employeeReducer from './EmployeeReducer'

const allReducer = combineReducers({
    employeeReducer
})

export default allReducer