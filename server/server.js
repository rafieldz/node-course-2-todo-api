const express = require('express');
const bodyParser = require('body-parser');

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

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});
//express server listening on port 3000
app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};
