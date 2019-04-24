const express = require('express');
const router = express.Router(); 
const Movie = require("../models/movie");
const User = require("../models/user");
const fs = require('fs');


function loadUsers(){
    fs.readFile("users.json","utf8",(err,data,next) => {          
        
            if (err) {
            console.log("error found", err);
            return ;
        }
        const dataFromFile = JSON.parse(data);
        dataFromFile.forEach((obj) => {
            console.log(obj);
            obj._id = obj.id ; 
            delete obj.id;
            User.findOne({_id: obj._id}).then((user) => {
                if (!user) {
                    User.create(obj).then(()=>{
                        console.log("user added to db");
                    }).catch(() => {
                        console.log(err);
                        return ;
                    });
                }
    
            }).catch(() => {
                console.log(err);
                return ;
            });
            
        });
});
}



function loadMovies(){
    fs.readFile("movies.json","utf8",(err,data,next) => {          

    if (err) {
        console.log(err);
        return ;
    }
    const dataFromFile = JSON.parse(data);
    dataFromFile.forEach((obj) => {
        obj._id = obj.id ; 
        delete obj.id;
        Movie.findOne({_id: obj._id}).then((movie) => {
            if (!movie) {
               
                Movie.create(obj).then(()=>{
                    console.log("movie added to db");
                }).catch(next);
            }

        }).catch(() => {
            console.log(err);
            return ;
        });
        
    });
});
}


router.get("/",(req,res) => {
    loadUsers();
    loadMovies();
    res.send("loading data...");
});


module.exports = router ; 