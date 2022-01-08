import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addEmployee } from "../actions/employee-actions";

let initialState = {
    employee: {
        LocationID: '',
        EmpCode: '',
        Name: '',
        Age: 0,
        Department: '',
        Designation: '',
        Location: ''
    }
}
function EmployeeForm({createEmployee}) {

    const [employee, setEmployee] = useState(initialState.employee);
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        createEmployee(employee)        
        navigate('/');

    }

    function handleChange(e){
        const { name, value } = e.target;
        switch(name){
            case "locationId":
                setEmployee({...employee, LocationID: value });
                break;
            case "empCode":
                setEmployee({...employee, EmpCode: value });
                break;
            case "name":
                setEmployee({...employee, Name: value });
                break;
            case "age":
                setEmployee({...employee, Age: parseInt(value) });
                break;
            case "designation":
                setEmployee({...employee, Designation: value });
                break;
            case "department":
                setEmployee({...employee, Department: value });
                break;
            case "location":
                setEmployee({...employee, Location: value });
                break;
            default: break;
        }
    }

    return (
        <Container>
            <Row>
                <Col className="col-md-6 mx-auto">
                    <h3>Employee - Create</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="locationID">
                            <Form.Label>Location ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter location ID" name="locationId" value={employee.LocationID} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Specify the employee location ID
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="empCode">
                            <Form.Label>Employee Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter employee code" name="empCode" value={employee.EmpCode} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="empName">
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter employee name" name="name" value={employee.Name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter designation" name="designation" value={employee.Designation} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" placeholder="Enter department" name="department" value={employee.Department} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" min="18" max="100" defaultValue={employee.Age} name="age" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter location" name="location" value={employee.Location} onChange={handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

function mapDispatchToProps(dispatch){
    let actionMap={
        createEmployee:addEmployee
    }
    return bindActionCreators(actionMap,dispatch);
}
export default connect(null,mapDispatchToProps) (EmployeeForm);