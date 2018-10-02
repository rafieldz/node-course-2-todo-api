const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

//EXPRESS SERVER
let app = express();

//MIDDLEWARE USING BODYPARSER
app.use(bodyParser.json());

//ROUTE POST TODOS
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((data) => {
    res.send(data);
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET TODOS BY ID
app.get('/todos/:id', (req, res) => {
  // get id
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => res.status(e));
});

//  ROUTE UPDATE TODOS BY ID
app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => res.status(400).send());
});

// ROUTE DELETE TODOS BY ID
app.delete('/todos/:id', (req, res) => {
  // get the id
let id = req.params.id;
  // validate the id -> not valid ? return 404
if (!ObjectID.isValid(id)) {
  return res.status(404).send();
}
Todo.findByIdAndRemove(id).then((todo) => {
  // if no doc, send 404
  if(!todo) {
    return res.status(404).send();
  }
  // if doc, send doc back with 200
  res.send({todo}); // success
}).catch((e) => res.status(400).send()); // error - 400 with empty body
});

// ROUTE POST USERS INTO DB.
app.post('/users', (req, res) => {
  let user = new User({
    email: req.body.email
  });
  user.save().then((data) => {
    res.send(data);
  }, (e) => {
    res.status(400).send(e);
  });
})

// ROUTE GET USERS BY ID
app.get('/users/:id', (req, res) => {
  User.find().then((user) => {
    res.send({user});
  }, (e) => {
    res.status(400).send(e);
  });
});

//express server listening on port 3000
app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};
