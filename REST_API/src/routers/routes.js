const express = require("express");
const routes = new express.Router();
const PlayersRanking = require("../src/models/players");

routes.post("/new_player",async(req,resp)=>{
    try{
        //Manually adding the data into the database
        //  const addingNewPlayer =  new PlayersRanking({
        //     "ranking" : 1,
        //     "name" :"Rohil Gupta",
        //     "dob" : "27/10/2000",
        //     "country":"india",
        //     "score" : "1994"
        //  })
        const addingNewPlayer = new PlayersRanking(req.body);
        console.log(req.body);
        const NewPlayer  =  addingNewPlayer.save();
        resp.status(200).send(NewPlayer);
    }
    catch(e)
    {
        resp.status(400).send("error occur");
    }
})
routes.get("/players",async(req,resp)=>{
    try{
        const getPlayer = await PlayersRanking.find({}).sort({"ranking":1});
        resp.status(201).send(getPlayers);
    }
    catch(e){
        console.log("error in get req");
   }
})
routes.get("/player/:id",async(req,resp)=>{
    try{
        const id = req.params.id;
        const getOnePlayer = new PlayersRanking.findById({_id:id})
        resp.status(200).send(getOnePlayer);
    }
    catch(e){
        resq.status(404).send("Player Not Found");
    }
})
routes.put("/player/:id",async(req,resp)=>{
    try{
        const id = req.params.id;
        const updatePlayer = new PlayersRanking.findByIdAndUpdate({_id:id},req.body);
        resp.send(updatePlayer);
    }
    catch(e){
        resq.status(400).send("Not Updated");
    }
})
routes.delete("/player/:id",async(req,resp)=>{
    try{
       const id = req.params.id;
       const deletePlayer = new PlayersRanking.findByIdAndDelete({_id:id});
       resp.status(200).send("successfully deleted");
    }
    catch(e){
        resq.status(400).send("Not Deleted");
    }
})

module.exports = routes;