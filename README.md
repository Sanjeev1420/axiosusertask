
React Users Management App

This React app is designed for managing user data. It utilizes Redux for state management, Axios for API requests, and React Bootstrap components for the user interface. Below, you'll find details about the main components, features, and how to use the app.

Features
View a list of users with their basic information.
Add a new user with details such as name, username, email, etc.
Edit existing user information.
Delete a user.
Components
Users Component
The main component that displays the list of users. It includes a navigation bar (UsersNav), user cards (UserCard), and an off-canvas form (UserForm) for adding/editing users.

UsersNav Component
A navigation bar component that provides a button to add a new user.

UserCard Component
A component that represents a user card, displaying basic user information. It includes buttons to edit or delete the user.

UserForm Component
An off-canvas form component for adding/editing users. It is used for both adding new users and editing existing ones.

Sample Data
Sample user data:

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
Usage
Clone the repository: git clone https://github.com/yourusername/react-users-management-app.git
Install dependencies: npm install
Run the app: npm start
Open http://localhost:3000 in your browser.
Feel free to explore the app and manage users easily.
