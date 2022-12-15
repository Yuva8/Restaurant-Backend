const express = require("express");
const router = express.Router();
const client = require("../models/clientSchema");

router.post("/adddata", async (req, res) => {
  //   console.log(req.body);
  const {
    area,
    climatic,
    popularcuisines,
    landcost,
    totalpopulation,
    working,
    kids,
  } = req.body;

  if (
    !area ||
    !climatic ||
    !popularcuisines ||
    !landcost ||
    !totalpopulation ||
    !working ||
    !kids
  ) {
    res.status(422).json("plz fill the data");
  }

  try {
    const preclient = await client.findOne({ area: area });
    console.log(preclient);

    if (preclient) {
      res.status(422).json("Area is already present");
    } else {
      const addclient = new client({
        area,
        climatic,
        popularcuisines,
        landcost,
        totalpopulation,
        working,
        kids,
      });

      await addclient.save();
      res.status(201).json(addclient);
      console.log(addclient);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/getdata", async (req, res) => {
  try {
    const clientdata = await client.find();
    res.status(201).json(clientdata);
    console.log(clientdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/getclient/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const clientindividual = await client.findById({ _id: id });
    console.log(clientindividual);
    res.status(201).json(clientindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.patch("/updateclient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedclient = await client.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updatedclient);
    res.status(201).json(updatedclient);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.delete("/deleteclient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteclient = await client.findByIdAndDelete({ _id: id });
    console.log(deleteclient);
    res.status(201).json(deleteclient);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
