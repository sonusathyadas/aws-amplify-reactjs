import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { EmployeeContext } from './Home';

export default function UserList() {

    const { employees } =  useContext(EmployeeContext); //For class components use static contextType=EmployeeContext  

    return (<React.Fragment>
        <Link to="employees/new" className="app-link">Add employee</Link>
        <Table>
            <thead>
                <tr>
                    <th>Location ID</th>
                    <th>E.Code</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.LocationID}</td>
                            <td>{item.EmpCode}</td>
                            <td>{item.Name}</td>
                            <td>{item.Designation}</td>
                            <td>{item.Department}</td>
                            <td>
                                <Link to={`employees/loc/${item.LocationID}/code/${item.EmpCode}`} className='app-link'>Details</Link>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
        <p>Source: {process.env.REACT_APP_EMPLOYEE_API_URL}</p>
    </React.Fragment>)
}


UserList.propTypes = {
    employees: PropTypes.arrayOf(
        PropTypes.shape({
            LocationID: PropTypes.string,
            EmpCode: PropTypes.string,
            Name: PropTypes.string,
            Age: PropTypes.number,
            Designation: PropTypes.string,
            Department:PropTypes.string,
            Location:PropTypes.string
        })
    )
}