const express = require("express");
const router = express.Router();
let restaurants = require("../data/restaurants");

router.get("/", (req, res) => {
  res.json(restaurants);
});

router.get("/:id", (req, res) => {
  const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).send("Restaurant not found");
  res.json(restaurant);
});

router.post("/", (req, res) => {
  const newRestaurant = {
    id: restaurants.length + 1,
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    cuisineType: req.body.cuisineType,
    contactInfo: req.body.contactInfo,
  };
  restaurants.push(newRestaurant);
  res.status(201).json(newRestaurant);
});

router.put("/:id", (req, res) => {
  const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).send("Restaurant not found");

  restaurant.name = req.body.name || restaurant.name;
  restaurant.description = req.body.description || restaurant.description;
  restaurant.location = req.body.location || restaurant.location;
  restaurant.cuisineType = req.body.cuisineType || restaurant.cuisineType;
  restaurant.contactInfo = req.body.contactInfo || restaurant.contactInfo;

  res.json(restaurant);
});

router.delete("/:id", (req, res) => {
  const restaurantIndex = restaurants.findIndex(
    (r) => r.id === parseInt(req.params.id)
  );
  if (restaurantIndex === -1)
    return res.status(404).send("Restaurant not found");

  const deletedRestaurant = restaurants.splice(restaurantIndex, 1);
  res.json(deletedRestaurant);
});

module.exports = router;
