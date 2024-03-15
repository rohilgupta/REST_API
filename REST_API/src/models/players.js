const express = require("express");
const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        uniquie:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
    },
    dob:{
         type:String,
         required:true,
         trim:true
    },
    event:{
        type:String,
        default:"100 Meter"
    }
})
const PlayersRanking = new mongoose.model("MensRanking",playerSchema);
module.export = PlayersRanking;