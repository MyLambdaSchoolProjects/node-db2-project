const express = require("express");
const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/car-dealer.db3"
  },
  useNullAsDefault: true
});

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "There was an error retrieving the cars" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "There was an error inserting new car" });
    });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    // validate the data
    db("cars")
      .where({ id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ message: `${count} record(s) updated` });
        } else {
          res.status(404).json({ message: "Car not found" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          errorMessage: "Error updating the car"
        });
      });
  });

  router.delete("/:id", (req, res) => {
    db("cars")
      .where({ id: req.params.id })
      .del()
      .then(count => {
        res.status(200).json({ message: `${count} record(s) removed` });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          errorMessage: "Error removing the car"
        });
      });
  });

module.exports = router;
