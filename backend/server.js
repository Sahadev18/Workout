require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workoutRouter');
const mongoose = require('mongoose');
const cors = require('cors');

// express apps
const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
  }));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// non-servable routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// connect to the db
const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log("Connected to the database");
            console.log(`Application running on port ${process.env.PORT}...`);
        });    
    }
    catch(error) {
        console.log(error);
    }
}

start();