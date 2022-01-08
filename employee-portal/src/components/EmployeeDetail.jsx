import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function EmployeeDetail() {
    let { loc, code } = useParams();

    const employee = useSelector(state => {
        const { employees } = state.EmployeeState;
        return employees.find(item => item.LocationID === loc && item.EmpCode === code)
    })

    return (<React.Fragment>
        {employee && createUI()}
    </React.Fragment>)

    function createUI() {
        return (<Container>
            <Row>
                <Col className="col-md-6 mx-auto">
                    <Table>
                        <thead>
                            <tr>
                                <th colSpan="2"><h3>Employee Details</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{employee.Name}</td>
                            </tr>
                            <tr>
                                <th>Employee Code</th>
                                <td>{employee.EmpCode}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{employee.Age}</td>
                            </tr>
                            <tr>
                                <th>Department</th>
                                <td>{employee.Department}</td>
                            </tr>
                            <tr>
                                <th>Designation</th>
                                <td>{employee.Designation}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>{employee.Location}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>)
    }

}