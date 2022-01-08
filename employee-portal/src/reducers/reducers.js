import { combineReducers} from 'redux';
import EmployeeReducer from './employee-reducer';

const reducers = combineReducers({
    EmployeeState: EmployeeReducer
})

export default reducers;