# Node Backend Starter

This project is for your guidance to follow in order to build your final projects. Please strictly follow the folder structure provided in this repository.

## Folder Structure

- `controllers/`: Contains the logic for handling requests and responses.
- `database/`: Contains the database connection configuration.
- `middlewares/`: Contains middleware functions for handling various tasks.
- `models/`: Contains the database models.
- `routes/`: Contains the route definitions.
- `utils/`: Contains utility functions.

## Setup and Run

1. Clone the repository:
   ```bash
   git clone https://github.com/baabale/node-backend-starter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd node-backend-starter
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=9000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=secret123

   EMAIL_SERVICE=gmail
   EMAIL=g0oD7@example.com
   PASSWORD=password
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Important Note

It is crucial to follow the folder structure provided in this repository to ensure consistency and maintainability in your final projects.
