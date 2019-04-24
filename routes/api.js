const express = require('express');
const router = express.Router(); 
const Movie = require("../models/movie");
const User = require("../models/user");

router.get("/movies", async (req,res,next) => {
    try {
         const movies = await Movie.find({});
         res.send(movies);    
    } catch (error) {
        next(error);        
    }
    }) ;
 router.get("/movies/:id", async (req,res,next) => {
        try {
            const movie = await Movie.find({_id: req.params.id});
            res.send({movie: movie});
        
        } catch (error) {
            next(error);        
        }
        }) ;
    
    
//Movie.create returns a promise
router.post("/movies", async (req,res,next) => {
    try {
        const movie = await Movie.create(req.body) ; 
        res.send(movie);
    } catch (error) {
        next(error);
    }
   
});


router.put("/movies/:id",async(req,res,next) => {
    try {
        await Movie.findByIdAndUpdate({_id: req.params.id}, req.body);
        const movie = await Movie.findOne({ _id: req.params.id }) ;
    } catch (error) {
        next(error);
    }
});

router.delete("/movies/:id",async (req,res,next) => {
    try {
        const movie = await Movie.findByIdAndDelete({_id: req.params.id});
        res.send(movie);
    } catch (error) {
        next(error);
    }
});

//start of users API
//return the movies of a specific user
router.get("/users/:id",async (req,res,next) => {
    try {
        const userMovies = await Movie.find({userId: req.params.id});
        res.send({userMovies: userMovies});


    } catch (error) {
        next(error);
    }
   
});

router.get("/users/",async (req,res,next) => {
    try {
        const users = await User.find({});
        
        res.send({users: users});

    } catch (error) {
        next(error);
    }
   
});



module.exports = router ; 