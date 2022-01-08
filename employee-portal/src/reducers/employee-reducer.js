
import * as ActionTypes from '../actions/action-types';
//import sampledata  from '../sampledata';
const initialState = {
    employees: [
        {
            "Department": "IT",
            "Location": "Mumbai",
            "LocationID": "MUM",
            "EmpCode": "E101",
            "Designation": "Admin",
            "Age": 40,
            "Name": "Ajay Kumar"
        },
        {
            "Department": "HR",
            "Location": "Chennai",
            "LocationID": "CHN",
            "EmpCode": "E105",
            "Designation": "Asst Manager",
            "Age": 34,
            "Name": "Sagar Jain"
        }
    ]
}

const EmployeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        default:
            return { ...state };
    }
}

export default EmployeeReducer;