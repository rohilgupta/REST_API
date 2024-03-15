const express = require("express");
require("../src/db/conn");
const app = express();
app.port = 3000;
app.use(express.json());
const PlayersRanking = require("../src/models/players");
app.get("/",async(req,resp)=>{
    resp.send("<h1>HOME PAGE</h1>");
})
app.use(routes);
app.listen(3000,()=>{
    console.log("listening at port 3000 ");
})