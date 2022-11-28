const { Router } = require('express');
const Restaurant = require('../models/Restaurant');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const restaurant = await Restaurant.getById(req.params.id);
      await restaurant.addReviews();
      res.json(restaurant);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const restaurants = await Restaurant.getAll();
      if (!restaurants) {
        next();
      }
      res.json(restaurants);
    } catch (e) {
      next(e);
    }
  });
  
