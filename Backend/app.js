//first create a basic server 

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const e = require("express");

dotenv.config();

app.use(express.json());

const MONGOURL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000 ;

mongoose.connect(MONGOURL , {
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected successfull");
    app.listen(PORT , () => {
        console.log(`server is running on port ${PORT}`);
        
    });
    
})
.catch((error) => {
    console.log("The error is : " , error);
})


const studentRoutes = require("./routes/studentRoute.js");
app.use("/admin", studentRoutes);
