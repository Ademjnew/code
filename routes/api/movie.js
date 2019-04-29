const express = require('express');
const router = express.Router();
const Movie = require("../../models/movie");

router.get("/", async (req,res,next) => {
    try {
         const movies = await Movie.find({});
         res.send(movies);
    } catch (error) {
        next(error);
    }
    }) ;
 router.get("/:id", async (req,res,next) => {
        try {
            const movie = await Movie.find({_id: req.params.id});
            res.send({movie: movie});

        } catch (error) {
            next(error);
        }
        }) ;


//Movie.create returns a promise
router.post("", async (req,res,next) => {
    try {
        const movie = await Movie.create(req.body) ;
        res.send(movie);
    } catch (error) {
        next(error);
    }

});


router.put("/:id",async(req,res,next) => {
    try {
        await Movie.findByIdAndUpdate({_id: req.params.id}, req.body);
        const movie = await Movie.findOne({ _id: req.params.id }) ;
    } catch (error) {
        next(error);
    }
});

router.delete("/:id",async (req,res,next) => {
    try {
        const movie = await Movie.findByIdAndDelete({_id: req.params.id});
        res.send(movie);
    } catch (error) {
        next(error);
    }
});




module.exports = router ;
