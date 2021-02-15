
const models = require("../models");



module.exports = function (app) {

    //Get All Excercises
    app.get("/api/workouts", function(req, res) {
        models.Workout.find({})
            .then(function (dbworkout) {
                res.json(dbworkout);
            }).catch(function (err) {
                res.status(400).json(err);
            });
    });

    //see workout that are on seed.js
    
    // app.get("/api/workouts", function(req, res){
    //     models.Workout.find({_id: workoutID}).then(function(dbworkout){

    //     })
    // })

    //New Workout
  
    app.post("/api/workouts", function (req, res) {
        models.Workout.create(req.body)
            .then(function (dbworkout) {
                res.json(dbworkout);
                console.log(dbworkout)
            }).catch(function (err) {
                res.status(400).json(err);
            });
    });

//Adding Total Duration 
app.get("/api/range", function(req, res){
    models.Workout.aggregate([
        { $addFields: { TotalDuration: {$sum: "excercises.duration"} } }
    ]).then(function (dbworkout) {
        res.json(dbworkout);
        console.log(dbworkout)
    }).catch(function (err) {
        res.status(400).json(err);
    });

})

}
