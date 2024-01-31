let express = require("express");
let mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
let app = express();
require("dotenv").config();

const port = process.env.PORT;
let MONGO_URL = process.env.MONGO_URL;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

//mongo connection
// mongoose.set("strictQuery", false)

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
 });

mongoose.connection.on("open", ()=> console.log("Mongodb server connected"));
mongoose.connection.on("error", (err)=> console.log(err.message))

app.listen(port,()=>{
    console.log("Server running on port " + port)
})