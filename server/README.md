# E-Commerce Backend System

## Objective
Create a small e-commerce backend system using Node.js and Sequelize (ORM for SQL databases). This project will help you understand database interactions, ORM modeling, and building RESTful APIs in Node.js.

## Requirements
1. **User Management:**
   - Users should be able to sign up, login, and logout.
   - Passwords should be securely hashed (using bcrypt).
   - JWT-based authentication for secured routes.

2. **Product Management:**
   - Admin users should be able to add, update, delete, and view products.
   - Products should have the following fields:
     - `id`
     - `name`
     - `price`
     - `description`
     - `quantity`
     - `category` (Create a Category model to manage product categories)
     - `imageUrl` (optional)

3. **Shopping Cart:**
   - Authenticated users should be able to:
     - Add items to their shopping cart.
     - View their cart with product details and total price.
     - Update the quantity of items in the cart.
     - Remove items from the cart.

4. **Order Management:**
   - Users should be able to place an order for the items in their cart.
   - Store order details in an Order model with fields like:
     - `orderId`
     - `userId` (relation to the User model)
     - `products` (array of product details)
     - `totalPrice`
     - `status` (e.g., pending, confirmed, shipped)
     - `createdAt`, `updatedAt`

5. **Database Design (using Sequelize):**
   - Models: `User`, `Product`, `Category`, `Cart`, `Order`.
   - Establish relationships between models (e.g., a user can have many orders, an order contains many products, etc.).

6. **API Endpoints:**
   - **Authentication:**
     - `POST /auth/signup` – Register a new user.
     - `POST /auth/login` – Login and receive a JWT.
   - **Product Management (for admin):**
     - `POST /products` – Create a new product (admin only).
     - `GET /products` – View all products.
     - `GET /products/:id` – View a specific product.
     - `PUT /products/:id` – Update a product (admin only).
     - `DELETE /products/:id` – Delete a product (admin only).
   - **Shopping Cart:**
     - `POST /cart` – Add product to cart.
     - `GET /cart` – View the cart.
     - `PUT /cart/:productId` – Update product quantity in cart.
     - `DELETE /cart/:productId` – Remove product from cart.
   - **Order Management:**
     - `POST /order` – Place an order.
     - `GET /order/:id` – View a specific order (for the user who placed it).
     - `GET /orders` – View all orders (admin only).

## Tools & Technologies
- Node.js with Express.
- Sequelize ORM for database management.
- PostgreSQL or MySQL as the relational database.
- JWT for authentication.
- Bcrypt for password hashing.
- Postman for API testing.

## Setup Instructions

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.
- Install PostgreSQL or MySQL and create a database for this project.
- Clone this repository to your local machine.

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
