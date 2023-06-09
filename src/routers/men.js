const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

    
    // We will handle post req
   router.post("/mens", async (req, res) => {
        try{
            const addingMensRecords = new MensRanking(req.body)
            console.log(req.body);
            const insertMens = await addingMensRecords.save();
            res.status(201).send(insertMens);
        }
        catch(e){
            res.status(400).send(e);
        }
    })
    
    // We will handle get req
    router.get("/mens", async (req, res) => {
        try{
            const getMens = await MensRanking.find({}).sort({"ranking":1});
            res.status(200).send(getMens);
        }
        catch(e){
            res.status(400).send(e);
        }
    })
    
    // We will handle get req of individual
    router.get("/mens/:id", async (req, res) => {
        try{
            const _id = req.params.id;
            const getMan = await MensRanking.findById(_id);
            // const getMens = await MensRanking.findById(_id is id od post id:_id jo user ne diya req.params.id)<- obj. destruction says 
            // if key & values are same so write once only ;
            res.send(getMan);
        }
        catch(e){
            res.status(400).send(e);
        }
    })
    
    // We will handle patch req of individual
   router.patch("/mens/:id", async (req, res) => {
        try{
            const _id = req.params.id;
            const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true
            });
            // const getMens = await MensRanking.findById(_id:_id)<- obj. destruction says 
            // if key & values are same so write once only ;
            res.send(getMen);
        }
        catch(e){
            res.status(500).send(e);
        }
    })
    
    // We will handle delete req of individual
router.delete("/mens/:id", async (req, res) => {
        try{
            const getMen = await MensRanking.findByIdAndDelete(req.params.id);
            // const getMens = await MensRanking.findById(_id:_id)<- obj. destruction says 
            // if key & values are same so write once only ;
            res.send(getMen);
        }
        catch(e){
            res.status(500).send(e);
        }
    })

    module.exports =router;