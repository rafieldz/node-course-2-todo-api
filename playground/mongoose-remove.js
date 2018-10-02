const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//  Remove all the data
// Todo.remove({}).then((result) => {
// console.log(result);
// })
Todo.findOneAndRemove({_id: '5bb0ea1315c0a238b0f6fc34'}).then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
}, (e) => {
  console.log('Id not found');
});

Todo.findByIdAndRemove('5bb0ea1315c0a238b0f6fc34').then((todo) => console.log(todo));
