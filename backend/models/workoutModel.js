const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create new schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
    load: {
        type: String,
        required: true
    }
}, {timestamps: true} );

// create a model
module.exports = mongoose.model('Workout', workoutSchema);