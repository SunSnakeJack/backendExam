const express = require("express");
const app = express();
const PORT = process.env.PORT || 8070 
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({extended: true}));

var corsOptions ={
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const db = require("./app/model");
db.sequelize.sync()
    .then(() => {
        console.log("Synced DB");
    })
    .catch(() => {
        console.log("Failed synced DB");
    });

// http://localhost:8070
app.get("/", (req, res) =>{
    res.json({message: "welcome to default routes"})
});

// http://localhost:8070/api/tutorials
require("./app/routes/tutorial.routes.js")(app);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});