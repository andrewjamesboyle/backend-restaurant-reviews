const { Router } = require('express');
const Review = require('../models/Review');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Review.delete(req.params.id);
      if (!data) {
        next();
      }
      res.json(data);
    } catch (e) {
      next(e);
    }
  });


