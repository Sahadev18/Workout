const Workout = require('../models/workoutModel');

// create a workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;

    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({updatedAt: -1});
    res.status(200).json(workouts);
}

// get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params;
    try {
        const workout = await Workout.findById(id);
        if(!workout) {
            return res.status(404).json({error: "No such workout"});
        }
        res.status(200).json(workout);
    } catch(error) {
        res.status(404).json({error: "No such workout"});
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    try{
        const workout = await Workout.findOneAndDelete({_id: id});
        if(!workout) {
            return res.status(404).json({error: "No such workout"});
        }
        res.status(200).json(workout);
    } catch(error) {
        res.status(404).json({error: "No such workout"});
    }
}

// update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params;

    try{
        const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body});
        if(!workout) {
            return res.status(404).json({error: "No such workout"});
        }
        res.status(200).json(workout);
    } catch(error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}