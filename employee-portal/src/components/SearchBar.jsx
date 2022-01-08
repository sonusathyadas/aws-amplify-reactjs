import { useContext, useRef } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { EmployeeContext } from "./Home";

export default function SearchBar() {

    const { doSearch } = useContext(EmployeeContext);
    const searchInput = useRef('');

    return (
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="search">Search here</InputGroup.Text>
                <FormControl  placeholder="Search by name or location" ref={searchInput} onChange={(e)=>doSearch(searchInput.current.value)} />
            </InputGroup>

        </Form>
    )
}