const express = require('express');
const { config } = require('dotenv');
const connectDB = require('./database/database');

// Load environment variables
config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 9001;

const app = express();

// Accept JSON data in the request body
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const { globalErrorMiddleware } = require('./middlewares/errors');

// Home route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running"
    });
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// 404 route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Error handler
app.use(globalErrorMiddleware);

// Start server
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});