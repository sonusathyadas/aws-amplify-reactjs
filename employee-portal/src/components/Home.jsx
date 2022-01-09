import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import UserList from './UserList';

export const EmployeeContext = React.createContext();

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: props.employees,
            filteredResults: props.employees
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    componentDidMount() {
        //this.props.loadEmployees();
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.employees !== nextProps.employees) {
          return {
            employees: nextProps.employees,
            filteredResults: nextProps.employees
          };
        }    
        // Return null to indicate no change to state.
        return null;
      }

    handleSearch(searchText) {
        if (searchText && searchText.length > 0) {
            searchText = searchText.toUpperCase();
            let searchResults = this.state.employees.filter((item) => item.Name.toUpperCase().indexOf(searchText) >= 0 || item.Location.toUpperCase().indexOf(searchText) >= 0 );
            this.setState({ filteredResults: searchResults })
        } else {
            this.setState({ filteredResults: this.state.employees })
        }
    }

    render() {
        return (
            <EmployeeContext.Provider value={{ employees: this.state.filteredResults, loadedAt: new Date(), doSearch: this.handleSearch }}>
                <Container>
                    <Row>
                        <Col><h2>Home</h2></Col>
                    </Row>
                    <Row>
                        <Col><SearchBar /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <UserList /> 
                        </Col>
                    </Row>

                </Container>
            </EmployeeContext.Provider>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.EmployeeState.employees,
        filteredResults:state.EmployeeState.employees
    }
}

export default connect(mapStateToProps)(Home);
