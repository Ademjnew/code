const express = require("express");
const routes = require("./routes/api");
const initialize = require("./routes/initialize");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express() ; 
const portNumber = process.env.port || 4001  ;

//connect to db
mongoose.connect("mongodb://localhost/MovieDB",{ useNewUrlParser: true });
mongoose.Promise = global.Promise ; 

//will be needed for later (if we want to compile react code and add it)
//app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/initialize",initialize);

app.use("/api",routes);




app.use((err,req,res,next) => {
    res.status(422).send({
        error: err.message
         
    });
    

});
app.listen(portNumber,() => {
});