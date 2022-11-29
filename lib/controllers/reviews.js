const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorizeDelete = require('../middleware/authorizeDelete');
const Review = require('../models/Review');

module.exports = Router()

  .delete('/:id', [authenticate, authorizeDelete], async (req, res, next) => {
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


