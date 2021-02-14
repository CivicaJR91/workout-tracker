const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema ({
    exercise:{
        type: String,
        trim: true,
        required: "Please choose an exercise"
    },

    name:{
        type: String,
        trim: true,
        required: "Enter exercise name"
    },

    weight:{
        type:Number
    },

    reps:{
        type: Number
    },
    
    sets:{
        type: Number

    },
    duration:{
        type: Number,
        required:"Please enter exercise duration"
    },

    distance:{
        type: Number
    }

});

const workoutFitness = mongoose.model("workout", workout);

module.exports = workoutFitness;