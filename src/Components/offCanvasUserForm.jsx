/** @format */

import React, { useState, useEffect } from "react";
import { Offcanvas, Button, Form, InputGroup } from "react-bootstrap";
import Joi from "joi-browser";

const UserForm = (props) => {
  const { userData, show, handleClose, handleSubmit } = props;
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || '',
    }));
  };

  const validateForm = () => {
    const schema = {
      id: Joi.number(),
      name: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      address_street: Joi.string().required(),
      address_building: Joi.string().required(),
      address_city: Joi.string().required(),
      address_zipcode: Joi.string().regex(/^[0-9]{5}(?:-[0-9]{4})?$/), 
      geo_lat: Joi.number().required(),
      geo_log: Joi.number().required(),
      phone: Joi.string().regex(/^[0-9-+() ]+$/),
      website: Joi.string().uri(),
      company_name: Joi.string().required(),
      company_catchphrase: Joi.string().required(),
      company_bs: Joi.string().required(),
    };

    const { error } = Joi.validate(formData, schema, { abortEarly: false });
    if (!error) return null;

    const validationErrors = {};
    for (let item of error.details) {
      validationErrors[item.path[0]] = item.message;
    }

    return validationErrors;
  };

  const handleFormSubmit = () => {
    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const isEdit = Object.keys(userData).length > 0 ? true : false;
    handleSubmit(formData, isEdit);
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement='end'
      style={{ width: "40rem" }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {Object.keys(userData).length > 0 ? "Edit User" : "Add User"}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={formData.name || ""}
              onChange={handleChange}
            />
            {errors.name && (
              <Form.Text className='text-danger'>{errors.name}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <Form.Text className='text-danger'>{errors.username}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <Form.Text className='text-danger'>{errors.email}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <Form.Text className='text-danger'>{errors.phone}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <InputGroup className='mb-3 mt-3'>
              <InputGroup.Text>Address</InputGroup.Text>
              <Form.Control
                placeholder='building'
                name='address_building'
                value={formData.address_building}
                onChange={handleChange}
              />
              <Form.Control
                placeholder='street'
                name='address_street'
                value={formData.address_street}
                onChange={handleChange}
              />
              <Form.Control
                placeholder='city'
                name='address_city'
                value={formData.address_city}
                onChange={handleChange}
              />
              <Form.Control
                placeholder='zipcode'
                name='address_zipcode'
                value={formData.address_zipcode}
                onChange={handleChange}
              />
            </InputGroup>
            {errors.address_building ||
            errors.address_street ||
            errors.address_city ||
            errors.address_zipcode ? (
              <Form.Text className='text-danger'>
                {errors.address_building}
                {errors.address_street}
                {errors.address_city}
                {errors.address_zipcode}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group>
            <InputGroup className='mb-3'>
              <InputGroup.Text>Latitude and Longitude</InputGroup.Text>
              <Form.Control
                placeholder='latitude'
                name='geo_lat'
                value={formData.geo_lat}
                onChange={handleChange}
              />
              <Form.Control
                placeholder='longitude'
                name='geo_log'
                value={formData.geo_log}
                onChange={handleChange}
              />
            </InputGroup>
            {errors.geo_lat ||
            errors.geo_log
             ? (
              <Form.Text className='text-danger'>
                {errors.geo_lat}
                {errors.geo_log}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Website </Form.Label>
            <Form.Control
              type='url'
              name='website'
              value={formData.website}
              onChange={handleChange}
            />
            {errors.website && (
              <Form.Text className='text-danger'>{errors.website}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type='text'
              name='company_name'
              value={formData.company_name}
              onChange={handleChange}
            />
             {errors.company_name && (
              <Form.Text className='text-danger'>{errors.company_name}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Company Catchphrase</Form.Label>
            <Form.Control
              type='text'
              name='company_catchphrase'
              value={formData.company_catchphrase}
              onChange={handleChange}
            />
             {errors.company_catchphrase && (
              <Form.Text className='text-danger'>{errors.company_catchphrase}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Company Bs</Form.Label>
            <Form.Control
              type='text'
              name='company_bs'
              value={formData.company_bs}
              onChange={handleChange}
            />
             {errors.company_bs && (
              <Form.Text className='text-danger'>{errors.company_bs}</Form.Text>
            )}
          </Form.Group>

          <Button
            variant='primary'
            className='mt-3'
            onClick={() => handleFormSubmit()}>
            Save
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserForm;
