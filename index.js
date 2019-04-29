const express = require("express");
const initialize = require("./routes/initialize");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');


const app = express() ;
const portNumber = process.env.port || 4001  ;
app.use(cors());

//connect to db
mongoose.connect("mongodb://localhost/AISEC",{ useNewUrlParser: true });
mongoose.Promise = global.Promise ;

require('./models/user');
require('./config/passport');

//will be needed for later (if we want to compile react code and add it)
//app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/initialize",initialize);

// This is the router
app.use(require('./routes'));



app.use((err,req,res,next) => {
    res.status(422).send({
        error: err.message
    });
});
app.listen(portNumber,() => {

});
