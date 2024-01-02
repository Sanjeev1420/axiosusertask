import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import '../Stylesheets/adminnav.css';
import logo from "../Images/applogo.png";
import usersicon from "../Images/usersicon.png"
import dashboardicon from "../Images/dashboardicon.png"

const AdminNav = () => {
  let navigate = useNavigate();

  return (
    <Navbar key={false} expand={false} className="bg-body-tertiary mb-0 mb-0">
      <Container fluid>
        <Navbar.Toggle className="custom-toggle justify-content-start" aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="60"
            height="60"
            alt=""
          />
          <Navbar.Text className="app-headerName">ShopEasy!</Navbar.Text>
        </Navbar.Brand>
        
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton className="nav-header">
            <Offcanvas.Title className="fs-3 " id={`offcanvasNavbarLabel-expand-${false}`}>
              Administrator
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-items" onClick={() => navigate('/')}>
              <img src={dashboardicon} heigth={35} width={35} className="nav-itemsIcon"/>
              Dashboard</Nav.Link>
              <Nav.Link className="nav-items"  onClick={() => navigate('/users')}>
              <img src={usersicon} heigth={35} width={35} className="nav-itemsIcon"/>
              Users</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AdminNav;
