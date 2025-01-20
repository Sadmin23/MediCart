# MediCart

MediCart is a full-stack e-pharmacy application designed to provide users with a seamless experience in browsing, ordering medicines, and managing shipments. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the platform ensures secure payment processing, role-based access, and an intuitive user interface.

## Demo Video

Check out the full demo of MediCart on YouTube: [https://youtu.be/PfEPG5jHWl0](#).

## Features

- **User Authentication:** Secure login and registration system.
- **Medicine Orders:** Users can browse, add to cart, and place orders for medicines.
- **Shipment Management:** Track the shipment status of orders.
- **Role Management:** Separate access controls for Customers and Admins.
- **Payment Gateway Integration:** Secure payments using the Stripe API.
- **REST API:** Developed with Node.js, Express.js, and MongoDB for handling backend operations.

## Frontend

The frontend is powered by React.js and includes the following dependencies:

- **State Management:** Redux, Redux Thunk
- **UI Components:** React Bootstrap, MDBReact, rc-slider
- **Alerts and Notifications:** React Alert
- **Pagination:** React JS Pagination
- **API Requests:** Axios
- **SEO Optimization:** React Helmet

### Key Scripts

- `start`: Runs the development server.
- `build`: Builds the production-ready application.
- `test`: Runs tests for the application.

### Proxy Setup

The frontend is configured to proxy requests to the backend at `http://127.0.0.1:4000`.

## Backend

The backend is implemented using Node.js and Express.js and includes the following dependencies:

- **Authentication:** Bcrypt.js, JSON Web Tokens (JWT)
- **File Uploads:** Express File Upload
- **Database:** MongoDB with Mongoose ORM
- **Email Service:** Nodemailer
- **Environment Variables:** Dotenv
- **Validation:** Validator
- **Cloud Storage:** Cloudinary for managing media files

### Key Scripts

- `dev`: Starts the backend in development mode with nodemon.
- `prod`: Starts the backend in production mode.
- `seeder`: Seeds the database with initial data.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url/medi-cart.git
   cd medi-cart
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Configure environment variables in a `.env` file in the backend directory.

4. Start the development servers:
   - **Frontend:** Run `npm start` inside the `frontend` directory.
   - **Backend:** Run `npm run dev` inside the `backend` directory.

---

Feel free to contribute or raise issues for further improvement.
