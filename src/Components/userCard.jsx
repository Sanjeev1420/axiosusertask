/** @format */

import React, { useState } from "react";
import defaultusrimg from "../Images/defaultuserimg.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import deleteuserIcon from "../Images/deleteuser.png";
import '../Stylesheets/UserCard.css';


const UserCard = (props) => {
  const { user, handleEdtBtn, handleDlt } = props;
  const [show, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Col key={user.id}>
      <Card className="custom-card" style={{ width: "13rem", height: "16rem" }} >
        <Card.Body>
          <div onClick={handleShow} className="d-flex flex-column align-items-center">
              <img
                src={defaultusrimg}
                style={{ height: "6rem", width: "6rem" }}
                className='mb-3 mt-3'
                alt='User'
              />
              <div className='mt-3 d-flex flex-column align-items-center'>
                <Card.Title>{user.username}</Card.Title>
                <small className='text-muted'>{user.email}</small>
              </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", justifyContent : "end" ,marginTop: "10px" }}>
            <FontAwesomeIcon
              icon={faUserEdit}
              style={{ color: "#4393d0", height: "23px", width: "23px" }}
              onClick={(e) => handleEdtBtn(user)}
            />
            <div style={{ marginLeft: "15px" }}>
              <img
                src={deleteuserIcon}
                style={{ height: "1.5em", width: "1.5em" }}
                onClick={(e) => handleDlt(user)}
              />
            </div>
          </div>
        </Card.Body>

        <Modal show={show} centered>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>{user.username}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={defaultusrimg}
              style={{ height: "6rem", width: "6rem" }}
              className='mb-3 mt-3'
              alt='User'
            />
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>
              Address: {user.address_street}, {user.address_building},{" "}
              {user.address_city}, {user.address_zipcode}
            </p>
            <p>
              Geo Location: {user.geo_lat}, {user.geo_log}
            </p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company Name: {user.company_name}</p>
            <p>Company Catchphrase: {user.company_catchphrase}</p>
            <p>Company BS: {user.company_bs}</p>
          </Modal.Body>
        </Modal>
      </Card>
    </Col>
  );
};

export default UserCard;
