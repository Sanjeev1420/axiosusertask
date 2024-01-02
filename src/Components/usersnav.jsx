import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../Stylesheets/usernav.css';
import usersicon from "../Images/usersicon.png"

const UsersNav = ({handleAddUserBtn}) => {
    return ( 
        <Navbar className="usernav">
        <Container>
          <Navbar.Brand className="usernav-header">
          <img src={usersicon} heigth={35} width={35} className="nav-itemsIcon"/>
          Users</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Button variant="custom" className="adduser-btn" onClick={handleAddUserBtn}>Add User</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default UsersNav;