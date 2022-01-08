import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeForm from './components/EmployeeForm';
import Home from './components/Home';


function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{process.env.REACT_APP_APP_NAME}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="about" element={<About />}></Route>
                    <Route exact path="contact" element={<Contact />}></Route>
                    <Route exact path="employees/loc/:loc/code/:code" element= { <EmployeeDetail/> }></Route>
                    <Route exact path="employees/new" element={<EmployeeForm/> } ></Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
