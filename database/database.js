const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const URI = process.env.MONGO_URI;
        const conn = await mongoose.connect(URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = connectDB;