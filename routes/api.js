
const models= require("../models");



module.exports = function(app){

//Get All Excercises
    app.get("/api/workout", function(req, res){
        models.Workout.find({})
        .then (function(workout){
            res.json(workout);
        }).catch(function(err){
            res.status(400).json(err);
        });
    });
//New Workout
app.get("/api/workout", function(req, res){
    models.Workout.create({type:"workout"})
    res.json(workout);
})

}
