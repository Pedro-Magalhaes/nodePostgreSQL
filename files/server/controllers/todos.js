const Todo = require('../models').Todo;

function restrictData(todo) {
  return {
    id: todo.id,
    title: todo.title
  }
}


module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
      .all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
  getById(req, res) {
    return Todo
      .findById(req.params.id)
      .then(todo => res.status(200).send(restrictData(todo)))
      .catch(error => res.status(400).send(error));
  },
};