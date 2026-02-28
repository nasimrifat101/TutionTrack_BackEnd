const express = require('express');
const cors = require('cors');
const ConnectDB = require('./src/config/db');


// Middleware
const app = express();
app.use(express.json());
app.use(cors());



ConnectDB()

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Import and use admin routes
const adminRoutes = require('./src/routes/admin.routes');
app.use('/api/admin', adminRoutes);


// Import and use auth routes
const authRoutes = require('./src/routes/auth.routes');
app.use('/api/auth', authRoutes);

// Import and use institute routes
const instituteRoutes = require('./src/routes/institute.routes');
app.use('/api/institutes', instituteRoutes);



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

