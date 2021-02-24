import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

const MyNavbar = () => {

  const search = (e) => {
    e.preventDefault();
    console.log("search")
  }
  const searchChange = () => {
    console.log("searchChange")
  }

  return (
    <Navbar className="my-navbar" variant="light" expand="xl">
      <Navbar.Brand className="brand" href="#home">
        HK LegCo Voteview
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>

        <Nav className="ml-auto">
          <Form inline className="form" onSubmit={search}>
            <FormControl type="text" placeholder="Search"
              onChange={searchChange} />
            <Button variant="outline-dark" onClick={search}>Search</Button>
          </Form>
          <Nav.Link href="#about-legco">About LegCo</Nav.Link>

          <NavDropdown title="Members" alignRight>
            <NavDropdown.Item href="#members-biographies">Members' Biographies</NavDropdown.Item>
            <NavDropdown.Item href="#members-contact-directory">Members' Contact Directory</NavDropdown.Item>
            <NavDropdown.Item href="#changes-in-legCo-membership">Changes in LegCo Membership</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#members-participation-records">Members' Participation Records</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Committees" alignRight>
            <NavDropdown.Item href="#establishment-subcommittee">Establishment Subcommittee</NavDropdown.Item>
            <NavDropdown.Item href="#financial-committee">Financial Committee</NavDropdown.Item>
            <NavDropdown.Item href="#house-committee">House Committee</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#public-works-subcommittee">Public Works Subcommittee</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#data">Data</Nav.Link>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  );
};

export default MyNavbar;
