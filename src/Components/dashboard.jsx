import React from 'react'
import { Navbar,Button,Container } from 'react-bootstrap';
import "../Stylesheets/usernav.css";
import dashboardicon from "../Images/dashboardicon.png"

const AdminDashboard = () => {
    return ( 
        <Navbar className="usernav">
        <Container>
          <Navbar.Brand className="usernav-header">
          <img src={dashboardicon} heigth={35} width={35} className="nav-itemsIcon"/>
          Dashboard</Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
     );
}
 
export default AdminDashboard;