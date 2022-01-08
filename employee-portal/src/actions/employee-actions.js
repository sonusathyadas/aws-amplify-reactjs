
import * as ActionTypes from './action-types';


export function addEmployee(employee){
    return{
        type:ActionTypes.ADD_EMPLOYEE,
        payload:employee
    }
}

export function searchEmployee(searchParams){
    return{
        type:ActionTypes.GET_EMPLOYEE,
        payload:searchParams
    }
}

