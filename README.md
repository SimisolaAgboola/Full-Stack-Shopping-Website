# E-Commerce Vue.js Application  

## Overview  

This project is a simple e-commerce application built using Vue.js, Firebase for authentication, MongoDB for database management, and Express.js as the backend. It allows users to browse products, view detailed product information, and manage their shopping cart, including adding or removing items. It also allows users sign up and login and features a custom NotFound page for wrong url entries. The backend is powered by Express.js and MongoDB, handling API routes to manage products and user shopping carts. 

## Technologies Used:
* Express.js: For serving API routes and the client application.  
* MongoDB: To store product data and user cart information.  
* Firebase Authentication: For handling user authentication and session management.
* Vue.js: frontend development

## Setup Instructions

### Prerequisites:  

Instal the following dependecnies in your command line
* Node.js
* MongoDB (or use MongoDB Atlas)
* Vue CLI for frontend development

### Steps:
#### Clone the repository:
* git clone https://github.com/SimisolaAgboola/Full-Stack-Shopping-Website.git
* cd Full-Stack-Shopping-Website

#### Install dependencies:
* npm install
* Setup Firebase:

#### Create a Firebase project.
* Enable email authentication in the Firebase console.
* Create a firebase.js file in your src directory with your Firebase config.

#### Start the backend server:
* cd backend
* node server.js
#### Start the Vue frontend:
* cd frontend
* npm run serve
