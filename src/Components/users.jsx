/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import UsersNav from "./usersnav";
import {
  saveAllUsers,
  updateUser,
  deleteUser,
  addUser,
} from "../redux/userSlice";
import UserCard from "./userCard";
import UserForm from "./offCanvasUserForm";

const Users = () => {
  const userState = useSelector((state) => state.users);
  let allUsers = userState.allusers.length > 0 ? userState.allusers : [];
  const dispatch = useDispatch();
  const API_URL = "https://6545d30afe036a2fa954d5cd.mockapi.io/axiosuser";
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [editUserData, setEditUserData] = useState({});
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => {
    setEditUserData({});
    setShowOffcanvas(false);
  };

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      dispatch(saveAllUsers({ allusers: response.data }));
    } catch (error) {
      console.error("Error in fetching user data: ", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleReceivedFormData = async (formInputs, isEdit) => {
    if (!isEdit) {
      try {
        dispatch(addUser({ newUser: formInputs }));
        const response = await axios.post(API_URL, formInputs);
        if (response.status === 200) {
          fetchAllUsers();
        }
      } catch (error) {
        console.error(`Error in adding user : ${error}`);
      }
    } else {
      try {
        dispatch(updateUser({ updatedUser: formInputs }));
        const response = await axios.put(
          `${API_URL}/${formInputs.id}`,
          formInputs
        );
        if (response.status === 200) {
          fetchAllUsers();
        }
      } catch (error) {
        console.error(`Error in updating user : ${error}`);
      }
    }
    handleCloseOffcanvas();
  };

  const handleAddUserButton = () => {
    setEditUserData({});
    handleShowOffcanvas();
  };

  const handleEditButton = (user) => {
    setEditUserData(user);
  };

  useEffect(() => {
    if (Object.keys(editUserData).length > 0) {
      handleShowOffcanvas();
    }
  }, [editUserData]);

  const handleDelete = async (user) => {
    try {
      const response = await axios.delete(`${API_URL}/${user.id}`);
      if (response.status === 200) {
        dispatch(deleteUser({ id: user.id }));
        fetchAllUsers();
      }
    } catch (error) {
      console.error(`Error in deleting user : ${error}`);
    }
  };

  return (
    <>
      <div>
        <UsersNav handleAddUserBtn={handleAddUserButton} />
        {allUsers.length > 0 ? (
          <Col xs={{ span: 10, offset: 1 }}>
            <Row xs={2} md={5} className='g-5 mt-1 mb-5'>
              {allUsers.map((user) => (
                <UserCard
                  user={user}
                  handleEdtBtn={handleEditButton}
                  handleDlt={handleDelete}
                />
              ))}
            </Row>
          </Col>
        ) : (
          <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        )}
      </div>

      <div>
        {/* Offcanvas form to add/edit user  */}
        <UserForm
          userData={editUserData}
          show={showOffcanvas}
          handleClose={handleCloseOffcanvas}
          handleSubmit={handleReceivedFormData}
        />
      </div>
    </>
  );
};

export default Users;
