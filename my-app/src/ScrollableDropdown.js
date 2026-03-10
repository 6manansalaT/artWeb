import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./ScrollableDropdown.css";
const ScrollableDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
            >
                select from here
            </Dropdown.Toggle>

            <Dropdown.Menu
                style={{
                    maxHeight:"200px",
                    overflowY:"auto",
                }}>
                    <Dropdown.Item href="#">pp</Dropdown.Item>
                    <Dropdown.Item href="#">doodoo</Dropdown.Item>
                    <Dropdown.Item href="#">puupuu</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ScrollableDropdown;