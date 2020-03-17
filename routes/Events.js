const { Router } = require('express');
const Event = require('../lib/models/Event');

module.exports = Router()
  .post('/', (req, res, next) => {
    Event
      .create(req.body)
      .then(event => res.send(event))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Event
      .findById(req.params.id)
      .then(event => res.send(event))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Event
      .find()
      .then(recipes => res.send(recipes))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Event
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(event => res.send(event))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Event
      .findByIdAndDelete(req.params.id)
      .then(event => res.send(event))
      .catch(next);
  });

