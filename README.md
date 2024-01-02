# React Users Management App

**React Users Management App** is a web application designed for efficiently managing user data. This app utilizes React, Redux, Axios, and React Bootstrap to provide a seamless user experience. The README provides an overview of the main components, features, sample data, and instructions for usage.

## Features

- View a list of users with their basic information.
- Add a new user with details such as name, username, email, etc.
- Edit existing user information.
- Delete a user.

## Components

### 1. Users Component

The main component responsible for displaying the user list. It includes a navigation bar (`UsersNav`), user cards (`UserCard`), and an off-canvas form (`UserForm`) for adding/editing users.

### 2. UsersNav Component

A sleek navigation bar component offering a button to add a new user.

### 3. UserCard Component

This component showcases a user card, presenting basic user information and providing buttons to edit or delete the user.

### 4. UserForm Component

An off-canvas form component facilitates seamless addition or editing of users.

## Sample Data

Sample user data:

```json
{
  "name": "Audra.Turner",
  "username": "Marlowe",
  "email": "Celia_Ward@yahoo.com",
  "address_street": "Murphy Points",
  "address_building": "1299",
  "address_city": "Gilroy",
  "address_zipcode": "32248-8113",
  "geo_lat": "-36.7672",
  "geo_log": "-161.0104",
  "phone": "1-474-280-5000 x81820",
  "website": "https://lanky-ecliptic.com",
  "company_name": "O'Keefe, Doyle and Jones",
  "company_catchphrase": "Versatile actuating orchestration",
  "company_bs": "cultivate e-business metrics",
  "id": "1"
}

