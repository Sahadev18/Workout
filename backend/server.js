require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workoutRouter');
const mongoose = require('mongoose');

// express apps
const app = express();

// middleware
app.use(express.json());
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

// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//     // listen for requests
//     app.listen(process.env.PORT, () => {
//         console.log("Connected to the DB and applicaiton is running on port ", process.env.PORT);
//     });
// })
// .catch((error) => {
//     console.log(error);
// });