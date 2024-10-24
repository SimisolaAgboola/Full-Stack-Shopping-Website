E-Commerce Vue.js Application
Overview
This project is a simple e-commerce application built using Vue.js, Firebase for authentication, MongoDB for database management, and Express.js as the backend. It allows users to browse products, view detailed product information, and manage their shopping cart, including adding or removing items.

Features
Product Listing: Displays a grid of available products with details like name, price, and image.
Product Details: Provides a detailed view of each product, with the ability to add it to the shopping cart.
User Authentication: Integrates Firebase for user authentication and session management.
Shopping Cart Management: Users can add products to their cart, view items in their cart, and remove items as needed.
Persistent Shopping Cart: Cart data is stored in MongoDB and can be fetched and updated when the user signs in.
NotFound Page: Displays a 404 page for invalid routes.

Components
1. NavBar.vue
A navigation bar that includes a link to the products page, a sign-out button (if the user is signed in), and a shopping cart link.

Key Features:
Displays a shopping cart button.
Signs out the user using Firebase authentication.
2. ProductsList.vue
Displays a list of products with their images, names, prices, and a button to view details of each product.

Props:
products: Array of product objects to be displayed.
3. ShoppingCartList.vue
Renders the shopping cart items and allows users to remove items from the cart.

Props:
products: Array of products currently in the shopping cart.
Emitted Events:
remove-from-cart: Triggered when the user clicks the "Remove from Cart" button.
4. ProductDetailPage.vue
Displays detailed information about a selected product. Users can add items to their cart if they are signed in.

Key Features:
Checks if the product is already in the user's cart.
Prompts the user to sign in via email if they are not authenticated.
Methods:
addToCart: Adds a product to the user's shopping cart.
signIn: Prompts the user to sign in via email link authentication using Firebase.


5. ProductsPage.vue
A page that lists all products using the ProductsList component.

6. ShoppingCartPage.vue
Displays the user's shopping cart using the ShoppingCartList component and provides a checkout button.

7. NotFoundPage.vue
A simple 404 page displayed when a user navigates to a non-existent route.

8. App.vue
The root component that manages user authentication and routes between different pages.

Key Features:
Monitors the authentication state using Firebase.
Passes the authenticated user to other components via props.
Backend (server.js)
The backend is powered by Express.js and MongoDB, handling API routes to manage products and user shopping carts.

Endpoints:
GET /api/products: Fetches a list of all products from the database.
GET /api/products/:productId: Fetches details for a specific product.
GET /api/users/:userId/cart: Fetches the user's shopping cart.
POST /api/users/:userId/cart: Adds an item to the user's cart.
DELETE /api/users/:userId/cart/:productId: Removes an item from the user's cart.


Technologies Used:
Express.js: For serving API routes and the client application.
MongoDB: To store product data and user cart information.
Firebase Authentication: For handling user authentication and session management.

Setup Instructions

Prerequisites:
Node.js
MongoDB (or use MongoDB Atlas)
Firebase account for authentication
Vue CLI for frontend development


Steps:
Clone the repository:
git clone <repository_url>
cd <project_directory>

Install dependencies:
npm install
Setup Firebase:

Create a Firebase project.
Enable email authentication in the Firebase console.
Create a firebase.js file in your src directory with your Firebase config.


Start the backend server:
cd backend
node server.js
Start the Vue frontend:
npm run serve


Conclusion
This e-commerce application demonstrates the use of Vue.js for frontend development, along with Firebase for user authentication, MongoDB for database management, and Express.js for the backend API. The app provides users with the ability to browse products, manage a shopping cart, and persist their session data.
