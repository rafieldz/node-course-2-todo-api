const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

//express server
let app = express();
//middleware
app.use(bodyParser.json());
//route todos
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
//  GET TODOS
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET TODOS BY ID
app.get('/todos/:id', (req, res) => {
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



  // Valid id using  isValid
    // 404 - send back empty send

     // findById
      // success
      // if todo - send back
      // if no todo - send back 404 with empty body
      // error
        // 400 - and send body back

});

// route to post users into db.
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

// route get
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
